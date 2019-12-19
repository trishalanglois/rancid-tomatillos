import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loggedIn } from '../../actions/actions';

export const Nav = ({ isLoggedIn, login }) => {
  return(
    <header>
      <img  />
      <h1>Rancid Tomatillos</h1>
        {!isLoggedIn ?
          <Link to='/login'>
            <button type='button'>Login</button>
          </Link>
          :
        <Link to='/'>
          <button type='button' onClick={() => login(false)}>Logout</button>
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
