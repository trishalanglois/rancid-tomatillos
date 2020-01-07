import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { mapDispatch, App } from './App';
import { getMovies } from '../../actions/actions';
import { fetchMovies } from '../../apiCalls';
jest.mock('../../apiCalls.js');

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    fetchMovies.mockImplementation(() => {
      return Promise.resolve({ 
        movies: [
          {
            id:2,
            title:"Ad Astra",
            poster_path:"https://image.tmdb.org/t/p/original//xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
            backdrop_path:"https://image.tmdb.org/t/p/original//5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
            release_date:"2019-09-17",
            overview:"The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
            average_rating:6.857142857142857
            }
        ]
      }) 
    });
  })

  it('should match the snapshot', () => {
    wrapper = shallow(<App  getMovies={jest.fn()}/>)

    expect(wrapper.debug()).toMatchSnapshot()
  })

  it('Should call fetchMovies componentDidMount is called', () => {
    wrapper = shallow(<App getMovies={jest.fn()}/>);

    expect(fetchMovies).toHaveBeenCalled()
  });

  describe('mapDispatch', () => {

    it('Should call getMovies with all movies when componentDidMount is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getMovies({ movies: [
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
        
      });

      const mappedProps = mapDispatch(mockDispatch);
      mappedProps.getMovies({ movies: [
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
      });

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});