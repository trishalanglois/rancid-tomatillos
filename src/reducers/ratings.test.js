import { getRatings } from '../reducers/ratings';

describe('ratings Reducer', () => {

  it('Should return the initial state', () => {
    const expected = [];

    const result = getRatings(undefined, []);

    expect(result).toEqual(expected);
  });

  it('Should return the correct state if the correct action is GET_MOVIES', () => {
    const initialState = [];

    const mockMovie = {
      type: 'GET_RATINGS',
    }
    const action = { 
        type: 'GET_MOVIES',
        mockMovie
      }

    const result = getMovies(initialState, action);
    const expected = [ ...initialState, ...action ];

    expect(result).toEqual(expected)
  });
});