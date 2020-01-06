import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loggedIn } from '../../actions/actions';
import PropTypes from 'prop-types';

export const Nav = ({ isLoggedIn, login }) => {
  return(
    <header>
      <h1 className='rancid-title'>Rancid</h1>
    {!isLoggedIn ?
      <Link to='/login'>
        <button className='login-button-nav' type='button'>Login</button>
      </Link>
        :
        <Link to='/'>
        <button className='login-button-nav' type='button' onClick={() => login(false)}>Logout</button>
      </Link>
    }
    </header>
  )
}

export const mapState = state => ({
  isLoggedIn: state.loggedIn
})

export const mapDispatch = dispatch => ({
  login: boolean => dispatch(loggedIn(boolean))
})

export default connect(mapState, mapDispatch)(Nav);

Nav.propTypes = {
  isLoggedIn: PropTypes.bool,
  login: PropTypes.func
}
