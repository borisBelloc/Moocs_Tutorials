import { createStore } from 'redux'
import toggleFavorite from './Reducers/favoriteReducer'

// creation et export du store
export default createStore(toggleFavorite)