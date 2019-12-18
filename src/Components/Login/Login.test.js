import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';

describe('Login', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Login />)
  })

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})