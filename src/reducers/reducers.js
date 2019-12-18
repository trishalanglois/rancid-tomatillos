import { combineReducers } from 'redux';
import { getMovies } from './movies';
import { currentUser } from './currentUser';
import { loggedIn } from './loggedIn';

const rootReducer = combineReducers({
  movies: getMovies,
  currentUser,
  loggedIn
});

export default rootReducer;