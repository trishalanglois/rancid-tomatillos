export const getMovies = (movies) => ({
  type: 'GET_MOVIES',
  movies
});

export const currentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    name: user.user.name,
    id: user.user.id
  }
};

export const loggedIn = (loggedIn) => {
  return {
    type: 'LOG_IN',
    loggedIn
  }
};
