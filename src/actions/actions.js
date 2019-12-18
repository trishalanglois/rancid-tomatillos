export const getMovies = (movies) => ({
  type: 'GET_MOVIES',
  movies
});

export const currentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    user
  }
};

export const loggedIn = (loggedIn) => {
  return {
    type: 'LOG_IN',
    loggedIn
  }
};