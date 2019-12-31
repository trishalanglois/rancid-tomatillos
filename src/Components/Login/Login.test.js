import React from 'react';
import { Login, mapState, mapDispatch } from './Login';
import { shallow } from 'enzyme';


describe('Login', () => {
  
  let wrapper, mockEvent

  describe('Login Component', () => {

    beforeEach(() => {
      mockEvent = { target: {name: 'email', value:'abc123@aol.com'} }
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

    it('Should ', () => {

    });

    it('Should ', () => {

    });
  });

  describe('mapState', () => {

  });

  describe('mapDispatch', () => {

  });

})