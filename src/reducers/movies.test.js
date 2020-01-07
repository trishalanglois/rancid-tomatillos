import { getMovies } from '../reducers/movies';

describe('movies Reducer', () => {

  it('Should return the initial state', () => {
    const expected = [];

    const result = getMovies(undefined, []);

    expect(result).toEqual(expected);
  });

  it('Should return the correct state if the correct action is GET_MOVIES', () => {
    const initialState = [];

    const mockMovie = {
      id:3,
      title:"Frozen II",
      poster_path:"https://image.tmdb.org/t/p/original//pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
      backdrop_path:"https://image.tmdb.org/t/p/original//xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg",
      release_date:"2019-11-20",
      overview:"Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
      average_rating:6
    }
    const action = { 
        type: 'GET_MOVIES',
        movies: [ mockMovie ]
      }

    const result = getMovies(initialState, action);
    const expected = [ ...initialState, ...action.movies ];

    expect(result).toEqual(expected)
  });
});