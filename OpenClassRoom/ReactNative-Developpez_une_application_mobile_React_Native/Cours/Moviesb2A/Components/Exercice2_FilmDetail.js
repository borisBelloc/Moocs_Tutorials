import React from 'react'

import { StyleSheet, View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { getFilmDetailFromApi } from '../API/TMDBApi'

class FilmDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      film: undefined, // Pour l'instant on n'a pas les infos du film, on initialise donc le film à undefined.
      isLoading: true // A l'ouverture de la vue, on affiche le chargement, le temps de récupérer le détail du film
    }
  }

  componentDidMount() {
    // console.log("Component FilmDetail monté")
    getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
      this.setState({
        film: data,
        isLoading: false
      })
    })
  }

  _displayLoading() {
    if (this.state.isLoading) { // Si isLoading vaut true, on affiche le chargement à l'écran
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _displayFilm() {
    if (this.state.film != undefined) { // on s'assure qu'un film a été choisi
      return (
        <ScrollView style={styles.scrollview_container}>
          <Text>{this.state.film.title}</Text>
          {/* Pour l'instant je n'affiche que le titre, je vous laisserais le soin de créer la vue. Après tout vous êtes aussi là pour ça non ? :)*/}
        </ScrollView>
      )
    }
  }


render() {
  console.log("Component FilmDetail rendu")
  // console.log(this.props.navigation)
  // const idFilm = this.props.navigation.state.params.idFilm // on récupere l'idFilm que l'on a fait passer ligne62 de search.js
  // comment trouver le chemin : https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native/5046301-concevez-une-navigation-entre-vos-vues#/id/r-5046484
  return (
    <View style={styles.main_container}>
      {this._displayLoading()}
      {this._displayFilm()}
      {/* on peut également mettre directement le chemin au lieu de passer par une variable : */}
      {/* <Text>Détail du film { this.props.navigation.state.params.idFilm }</Text> */}
    </View>
  )
}
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1
  }
})

export default FilmDetail


// ATTENTION : depuis react Navigation 2 on peut utiliser getParam :
// https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native/5046301-concevez-une-navigation-entre-vos-vues#/id/r-5400054
// this.props.navigation.getParam('idFilm')
//  au lieu de 
// this.props.navigation.state.params.idFilm
// !!!!!!!!!!!!!!!!!