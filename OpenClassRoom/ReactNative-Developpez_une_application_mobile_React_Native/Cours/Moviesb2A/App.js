import React from 'react';

// Il faut indiquer le chemin complet de l'app (chemins relatifs)
import Navigation from './Navigation/Navigation'
// import Search from './Components/Search'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'


export default class App extends React.Component {
  render() {
    return (
      // On indique les composants a afficher ; ici encapsulé dans le store (redux)
      <Provider store={Store}>
        <Navigation />
      </Provider>
    );
  }
}


