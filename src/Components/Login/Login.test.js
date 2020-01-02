import React from 'react';
import { Login, mapState, mapDispatch } from './Login';
import { shallow } from 'enzyme';
import { currentUser } from '../../actions/actions';


describe('Login', () => {
  
  let wrapper, mockEvent, mockGetUser

  describe('login Component', () => {

    beforeEach(() => {
      mockEvent = { target: {name: 'email', value:'abc123@aol.com'} }
      mockGetUser = jest.fn()
      wrapper = shallow(<Login />)
    });

    it('Should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    });

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
      const mockNameEvent = { target: {password: 'password', value:'password123'} }

      wrapper.find('.login-input-password').simulate('change', mockNameEvent);

      expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockNameEvent)
    });

    it('Should call getUser when handleLogin is called', () => {
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.find('button').simulate('click', mockEvent);
      
      expect(mockGetUser).toHaveBeenCalledTimes(1)
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

    it('Should call mapDispatch with a user when handleLogin is called', () => {

    });

  });

})