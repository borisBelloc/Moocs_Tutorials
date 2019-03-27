import React from 'react'
import { StyleSheet, View, Button, TextInput, Text, FlatList, ActivityIndicator } from 'react-native'
import films from '../Helpers/filmsData'

import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'


class Search extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state

    this.page = 0 // on initialise le numéro de la page
    this.totalPages = 0

    //  Dans le state, on ne gère que des données qui, une fois modifiées, peuvent affecter le rendu de notre component. 
    // https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native/4915721-manipulez-le-state#/id/r-5007111
    this.state = {
      films: [],
      isLoading: false // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche
    }
  }

  //  les films sont stockés dans un tableau "results"
  // https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native/4915721-manipulez-le-state#/id/r-4990352

  // on met isLoading a true lors de la recherche des films : 
  _loadFilms() {
    if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
      this.setState({ isLoading: true }) // Lancement du chargement
      getFilmsFromApiWithSearchedText(this.searchedText, this.page + 1).then(data => {
        this.page = data.page
        this.totalPages = data.total_pages
        this.setState({
          /// ... creer une copie du tableau/objet (on le met dans un tableau pour concaténé la liste de film)
          films: [...this.state.films, ...data.results], // écriture équivalente a ligne suivante :
          // films: this.state.films.concat(data.results),
          isLoading: false // Arrêt du chargement; on le remet a false une fois les data récupéré
        })
      })
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text // Modification du texte recherché à chaque saisie de texte
  }

  _searchFilms() {
    this.page = 0
    this.totalPages = 0
    this.setState({ // setState est asynchrone (c'est une fonction qui s'exécute en arrière-plan et qui ne bloque pas l'exécution de votre code)
      films: [] // en cas de nouvelle recherche on supprime la liste de films -> tableau vide
    }, () => { // "2eme parametre de setState" il est appellé lorsque setState est TERMINER (s'assure de la fin du traitement avant de faire la suite) ; voir doc : setState(updater[, callback]) : https://reactjs.org/docs/react-component.html#setstate
      // console.log("page :" + this.page + " / total page: " + this.totalPages + " / nbr film: " + this.state.films.length)
      this._loadFilms()
    })
  }

  _displayDetailForFilm = (idFilm) => {
    this.props.navigation.navigate("FilmDetail", { idFilm: idFilm }) // <- Screen du tabnavigator dans Navigation.js, paramettre a faire passer : navigate('RouteName', { parameters })
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
          {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement :
          small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
        </View>
      )
    }
  }

  render() {
    // console.log(this.props)
    return (
      <View style={styles.main_container}>
        {/* saut de ligne : <Text>{"\n"}{"\n"}</Text> */}

        {/* On peut mettre les style directement dans le textinput mais cela devient illisible : */}
        {/* <TextInput style={{ marginLeft: 5, marginRight: 5, height: 50, borderColor: '#000000', borderWidth: 1, paddingLeft: 5 }} placeholder='Titre du film'/> */}

        <TextInput
          style={styles.textinput}
          placeholder='Titre du film'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._searchFilms()} // -> lorsque l'on envoie une recherche, Entree sur clavier
        />
        {/* Attention si on veut plusieur style on creer un tableau, exemple :  */}
        {/* style=[{styles.textinput}, {styles.textinput2}] */}
        {/* style={[styles.textinput, {backgroundColor: 'blue'}]} */}

        <Button title="Rechercher" onPress={() => { this._searchFilms() }} />

        {/* https://facebook.github.io/react-native/docs/flatlist.html */}
        <FlatList
          // Data : Données a afficher ; on récupere le parametre film de l'objet state ligne 17
          data={this.state.films}
          // keyExtractor : on définis l'identifiant unique qui nome les objets 
          keyExtractor={(item) => item.id.toString()}
          // renderItem : template pour afficher les données
          onEndReachedThreshold={0.5} // 0.5 == demi ecran; limite pour déclenché l'action de "end reached"
          onEndReached={() => {
            if (this.page < this.totalPages) {
              this._loadFilms()
            }
          }}
          renderItem={({ item }) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm} />}
        />

        {/* les fonctions appelées dans le render doivent obligatoirement retourner des éléments graphiques : */}
        {this._displayLoading()}
      </View>
    )
  }
}

// Lorsque l'on use un style externalisé, il vaut mieux utiliser l'API StyleSheet (améliore les performance de l'application)
// https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native/4916061-appliquez-des-styles-a-vos-components#/id/r-4958556

// En react native les propriétées sont totue en CamelCase (contrairement a CSS) : backgroundColor, marginTop
const styles = StyleSheet.create({
  main_container: {
    // explication flex : https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native/5366161-construisez-vos-vues-avec-flexbox#/id/r-5366208
    flex: 1,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    // borderColor: '#000000',
    // borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position: 'absolute', // position: 'absolute'  permet de positionner des éléments dans la vue sans tenir compte des autres éléments de la vue
    // va nous permettre de faire passer le chargement par-dessus notre FlatList.
    left: 0,
    right: 0,
    top: 100, // evite que le LOADER soit tout en haut de l'écran et masque le champs/button de recherche
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

// On export le composant afin qu'il puisse être importer dans app.js
export default Search

