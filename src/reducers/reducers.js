import { combineReducers } from 'redux';
import { getMovies } from './movies';

const rootReducer = combineReducers({
  movies: getMovies
})

export default rootReducer;