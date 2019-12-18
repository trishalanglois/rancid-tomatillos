import { combineReducers } from 'redux';
import { getMovies } from './movies';
import { currentUser } from './currentUser'

const rootReducer = combineReducers({
  movies: getMovies,
  currentUser
})

export default rootReducer;