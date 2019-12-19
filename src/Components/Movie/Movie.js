import React from 'react';
import './Movie.scss';
import { Link } from 'react-router-dom';
import { getCurrentMovie } from '../../actions/actions';
import { connect } from 'react-redux';

const Movie = (props) => {
  return(
    <section>
      <h2>{props.movie.title}</h2>
      <p>{props.movie.average_rating}</p>
      <img className='movie-poster-img' src={props.movie.poster_path}/>
      <Link to={`/movies/${props.movie.id}`}>
        <button onClick={() => props.getCurrentMovie(props.movie)}>Start the Show</button>
      </Link>
    </section>
  )
}

export const mapDispatch = dispatch => ({
  getCurrentMovie: movie => dispatch(getCurrentMovie(movie))
})

export default connect(null, mapDispatch)(Movie)
