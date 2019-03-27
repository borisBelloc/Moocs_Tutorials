import React from 'react'

import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { getFilmDetailFromApi } from '../API/TMDBApi'

class FilmDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      film: undefined, // Pour l'instant on n'a pas les infos du film, on initialise donc le film à undefined.
      isLoading: true // A l'ouverture de la vue, on affiche le chargement, le temps de récupérer le détail du film
    }
  }

  _displayLoading() {
    if (this.state.isLoading) {
      // Si isLoading vaut true, on affiche le chargement à l'écran
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  componentDidMount() {
    console.log("Component FilmDetail monté")
  }


  render() {
    console.log("Component FilmDetail rendu")
    // console.log(this.props.navigation)
    // const idFilm = this.props.navigation.state.params.idFilm // on récupere l'idFilm que l'on a fait passer ligne62 de search.js
    // comment trouver le chemin : https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native/5046301-concevez-une-navigation-entre-vos-vues#/id/r-5046484
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
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
  }
})

export default FilmDetail


// ATTENTION : depuis react Navigation 2 on peut utiliser getParam :
// https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native/5046301-concevez-une-navigation-entre-vos-vues#/id/r-5400054
// this.props.navigation.getParam('idFilm')
//  au lieu de 
// this.props.navigation.state.params.idFilm
// !!!!!!!!!!!!!!!!!