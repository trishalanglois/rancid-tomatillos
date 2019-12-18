import React from 'react';
import MovieShowPage from './MovieShowPage';
import { shallow } from 'enzyme';

describe('MovieShowPage', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<MovieShowPage />)
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})