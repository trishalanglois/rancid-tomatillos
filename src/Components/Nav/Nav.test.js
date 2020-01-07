import React from 'react';
import { Nav } from './Nav';
import { shallow } from 'enzyme';
import { logOut, mapState, mapDispatch } from '../Nav/Nav';
import { getRatings, loggedIn } from '../../actions/actions';

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

    it('should call mapDispatch with a login', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = loggedIn(true);

      const mappedProps = mapDispatch(mockDispatch);
      mappedProps.login(true);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call mapDispatch with no ratings', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getRatings([]);

      const mappedProps = mapDispatch(mockDispatch);
      mappedProps.clearRatings([]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

  });



})
