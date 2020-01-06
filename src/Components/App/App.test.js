import React from 'react';
import { shallow } from 'enzyme';
import { mapDispatch, App } from './App';
import { getMovies } from '../../actions/actions';


describe('App', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<App />)

    expect(wrapper.debug()).toMatchSnapshot()
  })
})
