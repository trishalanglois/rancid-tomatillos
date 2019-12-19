export const currentMovie = (state = {}, action) => {
  switch (action.type) {
    case 'GET_MOVIE':
      return action.movie
    default:
      return state
  }
}
