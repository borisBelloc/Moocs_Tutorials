import React from 'react'

import { StyleSheet, View, Text, Image, ActivityIndicator, ScrollView } from 'react-native'
import { getFilmDetailFromApi, getImageFromApi } from '../API/TMDBApi'

import moment from 'moment'
import numeral from 'numeral'

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
    const { film } = this.state
    if (film != undefined) { // on s'assure qu'un film a été choisi
      return (
        <ScrollView style={styles.scrollview_container}>

          <Image
            style={styles.image}
            source={{ uri: getImageFromApi(film.backdrop_path) }}
          />

          <Text style={styles.title_text}>{film.title}</Text>
          <Text style={styles.description_text}>{film.overview}</Text>
          <Text style={styles.default_text}>Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}</Text>
          <Text style={styles.default_text}>Note : {film.vote_average} / 10</Text>
          <Text style={styles.default_text}>Nombre de votes : {film.vote_count}</Text>
          <Text style={styles.default_text}>Budget : {numeral(film.budget).format('0,0[.]00 $')}</Text>
          <Text style={styles.default_text}>Genre(s) : {film.genres.map(function (genre) {
            return genre.name;
          }).join(" / ")}
          </Text>
          <Text style={styles.bold}>Compagnie(s) : {film.production_companies.map(function (company) {
            return company.name;
          }).join(" / ")}
          </Text>
        </ScrollView>
      )
    }
  }


  render() {
    // console.log("Component FilmDetail rendu")
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
  },
  image: {
    height: 169,
    margin: 5
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 35,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: '#000000',
    textAlign: 'center',
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666',
    margin: 5,
    marginBottom: 15
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
})

export default FilmDetail


// ATTENTION : depuis react Navigation 2 on peut utiliser getParam :
// https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native/5046301-concevez-une-navigation-entre-vos-vues#/id/r-5400054
// this.props.navigation.getParam('idFilm')
//  au lieu de 
// this.props.navigation.state.params.idFilm
// !!!!!!!!!!!!!!!!!