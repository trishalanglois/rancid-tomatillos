import React from 'react';
import { MoviesContainer, mapState } from './MoviesContainer';
import { shallow } from 'enzyme';

describe('MoviesContainer', () => {
  it('should match the snapshot when there are movies in state', () => {
    let mockProps = {
      movies: [{
        id: 1,
        title: 'Erties Dirties',
        average_rating: 2,
        poster_path: 'www.weewoo.com'
      }]
    }
    let wrapper = shallow(<MoviesContainer
      movies={mockProps.movies}
    />)

    expect(wrapper.debug()).toMatchSnapshot()
  })

  describe('mapState', () => {
    it('should return an object with the movies data', () => {
      const mockState = {
        movies: [{
          id: 1,
          title: 'Erties Dirties',
          average_rating: 2,
          poster_path: 'www.weewoo.com'
        }]
      }

      const expected = {
        movies: [{
          id: 1,
          title: 'Erties Dirties',
          average_rating: 2,
          poster_path: 'www.weewoo.com'
        }]
      }

      const mappedProps = mapState(mockState);
      expect(mappedProps).toEqual(expected);
    })
  })
})
