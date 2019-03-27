// different menu en provenance de react navigation 

// - DrawerNavigator : menu a gauche de l'écran (menu hamburger)
// - Tab navigator ; bar onglets en bas ecran
// - Stack Navigator : empile les vues les unes par dessus les autres

import { createStackNavigator, createAppContainer } from 'react-navigation' // createAppContainer est requis pour pouvoir exporter et utiliser la navigation dans l'application
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'

const SearchStackNavigator = createStackNavigator({
  Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Search,
    navigationOptions: {
      title: "Rechercher des films"
    }
  },
  FilmDetail: {
    screen: FilmDetail,
  }
})

export default createAppContainer(SearchStackNavigator)