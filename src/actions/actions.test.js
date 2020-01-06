import * as actions from './actions';

describe('Actions', () => {

  it('Should have a type of GET_MOVIES', () => {
    const movies = [
    {
      id:2,
      title:"Ad Astra",
      poster_path:"https://image.tmdb.org/t/p/original//xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
      backdrop_path:"https://image.tmdb.org/t/p/original//5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
      release_date:"2019-09-17",
      overview:"The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
      average_rating:6.857142857142857
      },
      {
        id:1,
        title:"Jumanji: The Next Level",
        poster_path:"https://image.tmdb.org/t/p/original//l4iknLOenijaB85Zyb5SxH1gGz8.jpg",
        backdrop_path:"https://image.tmdb.org/t/p/original//zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg",
        release_date:"2019-12-04",
        overview:"In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
        average_rating:7.142857142857143
    }]
    const result = actions.getMovies(movies);
    const mockExpectedAction = {
      type: 'GET_MOVIES',
      movies
    } 

    expect(result).toEqual(mockExpectedAction);
  });

  it('Should have a type of SET_CURRENT_USER', () => {
    const mockUser = { user: {
      name: 'Garrett',
      id: 28,
      ratings: []
    }}

    const result = actions.currentUser(mockUser);
    const mockExpectedAction = {
      type: 'SET_CURRENT_USER',
      name: 'Garrett',
      id: 28,
      ratings: []
    } 

    expect(result).toEqual(mockExpectedAction);
  });


  it('Should have a type of LOG_IN', () => {
    const mockLoggedIn = true; 

    const result = actions.loggedIn(mockLoggedIn);
    const mockExpectedAction = {
      type: 'LOG_IN',
      loggedIn: true
    } 

    expect(result).toEqual(mockExpectedAction);
  });
  
  it('Should have a type of GET_MOVIE', () => {
    const movie = {
      id:1,
      title:"Jumanji: The Next Level",
      poster_path:"https://image.tmdb.org/t/p/original//l4iknLOenijaB85Zyb5SxH1gGz8.jpg",
      backdrop_path:"https://image.tmdb.org/t/p/original//zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg",
      release_date:"2019-12-04",
      overview:"In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
      average_rating:7.142857142857143
  } 

    const result = actions.getCurrentMovie(movie);
    const mockExpectedAction = {
      type: 'GET_MOVIE',
      movie
    } 

    expect(result).toEqual(mockExpectedAction);
  });

});