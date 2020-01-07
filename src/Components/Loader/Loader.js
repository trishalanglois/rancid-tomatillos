import React from 'react';
import './Loader.scss';
import projector from '../../images/film_projector.gif'

const Loader = () => {
  return (
    <main className="loader-wrapper">
      <h2 className="loading-text">Loading Movies...</h2>
      <img className="projector" src={projector} alt='film projector to show page loading' />
    </main>
  )
}

export default Loader;
