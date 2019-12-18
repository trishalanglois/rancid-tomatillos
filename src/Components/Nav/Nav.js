import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom'

const Nav = () => {
  return(
    <header>
      <img  />
      <h1>Rancid Tomatillos</h1>
      <Link to='/login'>
        <button type='button'>Login</button>
      </Link>
    </header>
  )
}

export default Nav;
