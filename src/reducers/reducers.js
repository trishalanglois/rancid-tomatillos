import { combineReducers } from 'redux';
import { getMovies } from './movies';

const rootReducer = combineReducers({
  getMovies
})

export default rootReducer;