import { currentUser } from '../reducers/currentUser';

describe('currentUser Reducer', () => {

  it('Should return the initial state', () => {
    const expected = {};

    const result = currentUser(undefined, {});

    expect(result).toEqual(expected);
  });

  it('Should return the correct state if the correct action is SET_CURRENT_USER', () => {
    const initialState = {}
    const action = { 
      type: 'SET_CURRENT_USER',
      name: 'Trasha',
      id: 88
      } 

    const result = currentUser(initialState, action);
    const expected = {
      name: 'Trasha',
      id: 88
    };

    expect(result).toEqual(expected)
  }); 
});