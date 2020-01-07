import { getRatings } from '../reducers/ratings';

describe('ratings Reducer', () => {

  it('Should return the initial state', () => {
    const expected = [];

    const result = getRatings(undefined, []);

    expect(result).toEqual(expected);
  });

  it('Should return the correct state if the correct action is GET_RATINGS', () => {
    const initialState = [];
    const mockMovie = {
      id:210,
      user_id:8,
      movie_id:2,
      rating:7,
      created_at:"2020-01-04T20:37:36.154Z",
      updated_at:"2020-01-04T20:37:36.154Z"
    }

    const action = { 
        type: 'GET_RATINGS',
        ratings: [ mockMovie ]
      }

    const result = getRatings(initialState, action);
    const expected = action.ratings;

    expect(result).toEqual(expected)
  });
});