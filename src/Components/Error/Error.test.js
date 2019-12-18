import React from 'react';
import Error from './Error';
import { shallow } from 'enzyme';

describe('Error', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Error />)
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})