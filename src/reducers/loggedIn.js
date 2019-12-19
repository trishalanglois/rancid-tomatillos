export const loggedIn = (state = false, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.loggedIn
    default:
      return state
  }
};