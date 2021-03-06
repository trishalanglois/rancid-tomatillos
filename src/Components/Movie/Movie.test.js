import React from 'react';
import { Movie, mapDispatch, mapState } from './Movie';
import { shallow } from 'enzyme';
import { getCurrentMovie } from '../../actions/actions';


describe('Movie', () => {
  let mockProps = {
    movie: {
      id: 1,
      title: 'Erties Dirties',
      average_rating: 2,
      poster_path: 'www.weewoo.com'
    },
    type: 'GET_MOVIE'
  }

  it('should match the snapshot', () => {
    let wrapper = shallow(<Movie
      movie={mockProps.movie}
      type={mockProps.type}
    />)

    expect(wrapper.debug()).toMatchSnapshot()
  });

describe('mapDispatch', () => {
  it('should call dispatch with a getCurrentMovie action when getCurrentMovie is called from props', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = getCurrentMovie(mockProps);
    const mappedProps = mapDispatch(mockDispatch);

    mappedProps.getCurrentMovie(mockProps);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
})

describe('mapState', () => {
  it('should return an object with the currentUser and ratings data', () => {
    const mockState = {
      filter: 'SET_CURRENT_USER',
      currentUser: {name: 'Ertie', id: '99'},
      ratings: [{id: 210, user_id: 99, movie_id: 2, rating: 10, created_at: "2020-01-04T20:37:36.154Z", updated_at: "2020-01-04T20:37:36.154Z"}]
    }

    const expected = {
      user: {name: 'Ertie', id: '99'},
      ratings: [{id: 210, user_id: 99, movie_id: 2, rating: 10, created_at: "2020-01-04T20:37:36.154Z", updated_at: "2020-01-04T20:37:36.154Z"}]
    }

    const mappedProps = mapState(mockState);
    expect(mappedProps).toEqual(expected);
    })
  })
})
