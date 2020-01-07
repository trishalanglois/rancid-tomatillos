import React from 'react';
import { Nav } from './Nav';
import { shallow } from 'enzyme';
import { logOut, mapState } from '../Nav/Nav';

describe('Nav', () => {

  let wrapper

  describe('Nav Component', () => {

    beforeEach(() => {
      wrapper = shallow(<Nav
        logOut={logOut}
        isLoggedIn={true}
        login={true}
        clearRatings={jest.fn()}
      />)
    });

    it('should match the snapshot', () => {
      expect(wrapper.debug()).toMatchSnapshot()
    })
  });

  describe('mapState', () => {

    it('should return an object with isLoggedIn', () => {
      const mockState = {
        loggedIn: true,
      };
      const expected = { isLoggedIn: true };

      const mappedProps = mapState(mockState);

      expect(mappedProps).toEqual(expected);
    });

  });

  describe('mapDispatch', () => {

    it('', () => {

    });

  });



})
