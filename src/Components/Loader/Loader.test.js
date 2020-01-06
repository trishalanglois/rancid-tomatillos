import React from 'react';
import Loader from './Loader';
import { shallow } from 'enzyme';

describe('Loader', () => {

  it('should match the snapshot', () => {
    let wrapper = shallow(<Loader />)
    expect(wrapper.debug()).toMatchSnapshot()
  })
})
