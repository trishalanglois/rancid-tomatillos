import React from 'react';
import { Movie, mapDispatch } from './Movie';
import { shallow } from 'enzyme';
import { getCurrentMovie } from '../../actions/actions';


describe('Movie', () => {
  let wrapper
  let mockProps = {
    movie: {
      id: 1,
      title: 'Erties Dirties',
      average_rating: 2,
      poster_path: 'www.weewoo.com'
    },
    type: 'GET_MOVIE'
  }

  beforeEach(() => {
    wrapper = shallow(<Movie
      id={mockProps.movie.id}
      title={mockProps.movie.title}
      average_rating={mockProps.movie.average_rating}
      poster_path={mockProps.movie.poster_path}
      />)
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

describe('mapDispatch', () => {
  it('should call dispatch with a getCurrentMovie action when getCurrentMovie is called from props', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = getCurrentMovie(mockProps);
    const mappedProps = mapDispatch(mockDispatch);

    mappedProps.getCurrentMovie(mockProps);
    console.log(mockProps.movie);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
})
})
