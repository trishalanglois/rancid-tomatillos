import React from 'react';
import Movie from './Movie';
import { shallow } from 'enzyme';

describe('Movie', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Movie />)
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})