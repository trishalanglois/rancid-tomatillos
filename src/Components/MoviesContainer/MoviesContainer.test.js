import React from 'react';
import MoviesContainer from './MoviesContainer';
import { shallow } from 'enzyme';

describe('MoviesContainer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<MoviesContainer />)
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})