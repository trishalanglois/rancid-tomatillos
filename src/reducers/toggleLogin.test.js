import { loggedIn } from '../reducers/toggleLogin';

describe('toggleLogin Reducer', () => {

  it('Should return the initial state', () => {
    const expected = false;

    const result = loggedIn(undefined, false);

    expect(result).toEqual(expected);
  });

  it('Should return the correct state if the correct action is LOG_IN', () => {
    const initialState = false;

    const action = { 
        type: 'LOG_IN',
        loggedIn: true
      }

    const result = loggedIn(initialState, action);
    const expected = true;

    expect(result).toEqual(expected)
  });

  it('Should return the correct state if the correct action is LOG_OUT', () => {
    const initialState = false;

    const action = { 
        type: 'LOG_OUT',
        loggedIn: false
      }

    const result = loggedIn(initialState, action);
    const expected = false;

    expect(result).toEqual(expected)
  });
});