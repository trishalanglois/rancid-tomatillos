export const getMovies = movies => ({
  type: 'GET_MOVIES',
  movies
});

export const currentUser = user => ({
  type: 'SET_CURRENT_USER',
  name: user.user.name,
  id: user.user.id
});

export const loggedIn = loggedIn => ({
  type: 'LOG_IN',
  loggedIn
});

export const getCurrentMovie = movie => ({
  type: 'GET_MOVIE',
  movie
});

