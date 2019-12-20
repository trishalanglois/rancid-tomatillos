import { combineReducers } from 'redux';
import { getMovies } from './movies';
import { currentUser } from './currentUser';
import { loggedIn } from './toggleLogin';
import { currentMovie } from './currentMovie';

const rootReducer = combineReducers({
  movies: getMovies,
  currentUser,
  loggedIn,
  currentMovie
});

export default rootReducer;
