
const initialState = { favoritesFilm: [] }

function toggleFavorite(state = initialState, action) { // on initialise le state avec les favoris actuel (vide au 1er appel)
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      // verif si film déjà en favoris; return -1 si findIndex ne trouve rien
      const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
      if (favoriteFilmIndex !== -1) {
        // Le film est déjà dans les favoris, on le supprime de la liste
        console.log("favoriteFilmIndex -> " + favoriteFilmIndex);
        nextState = {
          ...state,
          favoritesFilm: state.favoritesFilm.filter((item, index) => index !== favoriteFilmIndex),
        }
      }
      else {
        // Le film n'est pas dans les films favoris, on l'ajoute à la liste
        nextState = {
          ...state,
          favoritesFilm: [ ...state.favoritesFilm, action.value ]
        }
      }
      return nextState || state // return nextState si != indefine sinon return state
    default:
      return state
  }
}

export default toggleFavorite