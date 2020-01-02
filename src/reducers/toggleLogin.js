export const loggedIn = (state = false, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.loggedIn
    case 'LOG_OUT':
      return action.loggedIn
    default:
      return state
  }
};
