export const getMovies = (state = [], action) => {
  switch(action.type) {
    case 'GET_MOVIES':
      return [...state, ...action.movies]
    default: 
      return state
  }
}