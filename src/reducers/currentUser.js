export const currentUser = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
    return {
      name: action.name,
      id: action.id
    }
    default:
      return state
  }
}
