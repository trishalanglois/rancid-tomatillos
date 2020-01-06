import React from 'react';
import { Nav } from './Nav';
import { shallow } from 'enzyme';

describe('Nav', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<Nav />)
    expect(wrapper.debug()).toMatchSnapshot()
  })
})
