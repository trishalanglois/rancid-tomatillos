import { combineReducers } from 'redux';
import { getMovies } from './movies';
import { currentUser } from './currentUser';
import { loggedIn } from './toggleLogin';
import { currentMovie } from './currentMovie';
import { getRatings } from '../reducers/ratings'

const rootReducer = combineReducers({
  movies: getMovies,
  currentUser,
  loggedIn,
  currentMovie,
  ratings: getRatings
});

export default rootReducer;
