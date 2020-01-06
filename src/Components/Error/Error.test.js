import React from 'react';
import { Error } from './Error';
import { shallow } from 'enzyme';

describe('Error', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Error />)
  })

  it('should match the snapshot', () => {
    expect(wrapper.debug()).toMatchSnapshot()
  })
})
