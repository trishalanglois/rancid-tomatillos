import { currentMovie } from '../reducers/currentMovie';

describe('Reducers', () => {

  it('Should return the initial state', () => {
    const expected = {};

    const result = currentMovie(undefined, {});

    expect(result).toEqual(expected);
  });

  it('Should return the correct state if the correct action is GET_MOVIE', () => {
    const initialState = [
      {
        id:2,
        title:"Ad Astra",
        poster_path:"https://image.tmdb.org/t/p/original//xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
        backdrop_path:"https://image.tmdb.org/t/p/original//5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
        release_date:"2019-09-17",
        overview:"The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
        average_rating:6.857142857142857
        },
      ]
    const action = { type: 'ADD_TODO', text: 'Hi', id: 28 }

    const result = currentMovie(initialState, action);
    const expected = [{ id: 2, text: 'YAS', completed: false }, { id: 28, text: 'Hi', completed: false }];

    expect(result).toEqual(expected)
  }); 

});