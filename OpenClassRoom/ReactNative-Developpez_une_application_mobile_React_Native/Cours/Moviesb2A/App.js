import React from 'react';

// Il faut indiquer le chemin complet de l'app (chemins relatifs)
import Navigation from './Navigation/Navigation'
// import Search from './Components/Search'

export default class App extends React.Component {
  render() {
    return (
      // On indique les composants a afficher
      <Navigation/>
    );
  }
}


