import React from 'react';
import './Movie.scss';

const Movie = ({ id, title, poster_path, average_rating }) => {
  return(
    <section>
      <h2>{title}</h2>
      <p>{average_rating}</p>
      <img className='movie-poster-img' src={poster_path}/>
      <button>Start the Show</button>
    </section>
  )
}

export default Movie