import { combineReducers } from 'redux';
import { getMovies } from './movies';
import { currentUser } from './currentUser';
import { loggedIn } from './toggleLogin';

const rootReducer = combineReducers({
  movies: getMovies,
  currentUser,
  loggedIn
});

export default rootReducer;
