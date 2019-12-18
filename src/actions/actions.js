export const getMovies = (movies) => ({
  type: 'GET_MOVIES',
  movies
});

export const currentUser = (user) => {
  console.log('user:', user)
  return {type: 'SET_CURRENT_USER',
  user
}
};