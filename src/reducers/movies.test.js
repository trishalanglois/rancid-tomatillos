import { getMovies } from '../reducers/movies';

describe('movies Reducer', () => {

  it('Should return the initial state', () => {
    const expected = [];

    const result = getMovies(undefined, []);

    expect(result).toEqual(expected);
  });

  it('Should return the correct state if the correct action is SET_CURRENT_USER', () => {
    const initialState = {}
    const action = { 
      type: 'SET_CURRENT_USER',
      name: 'Trasha',
      id: 88
      } 

    const result = movies(initialState, action);
    const expected = {
      name: 'Trasha',
      id: 88
    };

    expect(result).toEqual(expected)
  }); 
});