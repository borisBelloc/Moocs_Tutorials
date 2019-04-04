
const initialState = { favoritesFilm: [] }

function toggleFavorite(state = initialState, action) { // on initialise le state avec les favoris actuel (vide au 1er appel)
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      // verif si film déjà en favoris; return -1 si findIndex ne trouve rien
      const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
      if (favoriteFilmIndex !== -1) {
        // si le film est trouvé, on le supprime des favoris
        nextState = {
          ...state,
          favoritesFilm: state.favoritesFilm.filter((item, index) => index !== favoriteFilmIndex)
        }
      }
      else {
        // ajout en favoris
        nextState = {
          ...state,
          favoritesFilm: [ ...state.favoritesFilm, action.value ]
        }
      }
      return nextState || state // returne nextState si != indefine sinon returne state
    default:
      return state
  }
}

export default toggleFavorite