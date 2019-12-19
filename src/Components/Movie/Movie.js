import React from 'react';
import './Movie.scss';
import { Link } from 'react-router-dom';

const Movie = ({ id, title, poster_path, average_rating }) => {
  return(
    <section>
      <h2>{title}</h2>
      <p>{average_rating}</p>
      <img className='movie-poster-img' src={poster_path}/>
      <Link to={`/movies/${id}`}>
        <button>Start the Show</button>
      </Link>
    </section>
  )
}

export default Movie
