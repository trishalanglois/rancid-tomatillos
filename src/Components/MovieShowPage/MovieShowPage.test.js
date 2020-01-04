import React from 'react';
import MovieShowPage from './MovieShowPage';
import { shallow } from 'enzyme';
import { getCurrentMovie } from '../../actions/actions';

describe('MovieShowPage', () => {
  let wrapper

  describe('MovieShowPage Component', () => {

    beforeEach(() => {
      wrapper = shallow(<MovieShowPage />)
    });
  
    it('Should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });
  });

  describe('mapState', () => {

    it('Should be passed a selected movie', () => {
      const mockMovie = {

      }
      const mockState = { 
        loggedIn: true,
        movies: [ {movie: 'movie1'} ]
      };
      const expected = { : true };

      const mappedProps = mapState(mockState);

      expect(mappedProps).toEqual(expected); 
    })
  });



})