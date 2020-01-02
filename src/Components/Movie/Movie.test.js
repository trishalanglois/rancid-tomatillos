import React from 'react';
import { Movie, mapDispatch } from './Movie';
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

  it.skip('should match the snapshot', () => {
    let wrapper = shallow(<Movie
      movie={mockProps.movie}
      type={mockProps.type}
    />)

    expect(wrapper).toMatchSnapshot()
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
})
