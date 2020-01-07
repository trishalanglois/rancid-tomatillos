import React from 'react';
import { Login, mapState, mapDispatch } from './Login';
import { shallow } from 'enzyme';
import { currentUser, loggedIn } from '../../actions/actions';
import { getUser, getUserRatings } from '../../apiCalls';
jest.mock('../../apiCalls')


describe('Login', () => {
  let wrapper, mockEvent, mockGetUser

  describe('Login Component', () => {
    beforeEach(() => {
      mockEvent = { target: {name: 'email', value:'abc123@aol.com'} }
      mockGetUser = jest.fn()
      wrapper = shallow(<Login />)
    });

    it('Should match the snapshot when there is no error in state', () => {
      expect(wrapper.debug()).toMatchSnapshot()
    });

    it('should match the snapshot when there is an error in state', () => {
      wrapper.setState({ error: 'YOU DID SOMETHING WRONG!!!!!' })

      expect(wrapper.debug()).toMatchSnapshot();
    })

    it('Should setState when handleChange is called', () => {
      wrapper.setState({ email: '', password:'', error: '' });
      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state()).toEqual({ email: 'abc123@aol.com', password:'', error: '' })
    });

    it('Should call handleChange when email input is changed', () => {
      wrapper.instance().handleChange = jest.fn();
      const mockEmailEvent = { target: {email: 'email', value:'abc123@aol.com'} }

      wrapper.find('.login-input-email').simulate('change', mockEmailEvent);

      expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEmailEvent)
    });

    it('Should call handleChange when password input is changed', () => {
      wrapper.instance().handleChange = jest.fn();
      const mockPasswordEvent = { target: {password: 'password', value:'password123'} }

      wrapper.find('.login-input-password').simulate('change', mockPasswordEvent);

      expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockPasswordEvent)
    });

    it('Should call getUser with an email and password when handleLogin is called', () => {
      const mockEvent = { preventDefault: jest.fn() };
      getUser.mockImplementation(() => {
        return Promise.resolve()
      });

      wrapper.setState({ email: 'abc123@aol.com', password: 'password123', error: '' });
      wrapper.find('button').simulate('click', mockEvent);

      expect(getUser).toHaveBeenCalledWith('abc123@aol.com', 'password123')
    });

    

    it('Should call getUserRatings with a userId when handleGetUserRatings is called', () => {
      getUserRatings.mockImplementation(() => {
        return Promise.resolve() 
      });
      const expected = 1;

      wrapper.instance().handleGetUserRatings(expected);

      expect(getUserRatings).toHaveBeenCalledWith(expected)
    });
  });

  describe('mapState', () => {

    it('Should return a login value of true', () => {
      const mockState = {
        loggedIn: true,
        movies: [ {movie: 'movie1'} ]
      };
      const expected = { isLoggedIn: true };

      const mappedProps = mapState(mockState);

      expect(mappedProps).toEqual(expected);
    })
  });

  describe('mapDispatch', () => {

    it('Should call mapDispatch with a user when handleLogin is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = currentUser({ user: { id: 8, name: 'Rick' } });

      const mappedProps = mapDispatch(mockDispatch);
      mappedProps.currentUser({ user: { id: 8, name: 'Rick' } });

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('Should call mapDispatch with a loggedIn boolean when handleLogin is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = loggedIn(true);

      const mappedProps = mapDispatch(mockDispatch);
      mappedProps.loggedIn(true);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

})
