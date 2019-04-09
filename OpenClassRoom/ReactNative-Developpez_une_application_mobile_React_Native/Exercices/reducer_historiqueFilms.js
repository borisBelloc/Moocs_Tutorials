// Cours : https://openclassrooms.com/fr/courses/4902061-developpez-une-application-mobile-react-native/5400081-construisez-une-action-sur-redux
// Chapitre : Construisez une action sur Redux
// Exercice : Créer un reducer pour gérer un historique de films consultés

const initialState = { historicFilms: [] }

function manageHistoricFilms(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FILMDETAIL':
      const historicFilmIndex = state.historicFilms.findIndex(item => item.id === action.value.id)
      if (historicFilmIndex !== -1) {
        // Le film est déjà dans l'historique, on ne fait rien
        nextState = { ...state }
      } else {
        // Le film n'est pas dans l'historique', on l'ajoute à la liste en concaténant le state et la nouvelle valeur
        nextState = {
          ...state,
          historicFilms: [...state.historicFilms, action.value]
        }
      }
      return nextState || state // return nextState si != indefine sinon return state

    case 'REMOVE_HISTORIC_FILM':
      const historicFilmIndex2 = state.historicFilms.findIndex(item => item.id === action.value.id)
      if (historicFilmIndex2 !== -1) {
        // Le film est bien dans l'historique, on peut le supprimer
        nextState = {
          ...state,
          historicFilms: state.historicFilms.filter((item, index) => index !== historicFilmIndex2),
        }
      } else {
        // Le film n'est pas dans l'historique, on ne fait rien
        nextState = { ...state }
      }
      return nextState || state

    case 'RESET_HISTORIC':
      nextState = { historicFilms: [] }
      return nextState || state

    default:
      return state
  }
}

export default manageHistoricFilms

// Commande reçu lors de la consultation d'un film :
// let action = { type: 'TOGGLE_FILMDETAIL', value: { id: 1, title: 'Star Wars' } }


// Commande reçu pour supprimer un film de l'historique :
// let action = { type: 'REMOVE_HISTORIC_FILM', value: { id: 1, title: 'Star Wars' } }

// Commande reçu pour vider l'historique
// let action = { type: 'RESET_HISTORIC' }

