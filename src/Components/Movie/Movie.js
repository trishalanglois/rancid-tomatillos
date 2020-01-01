import React from 'react';
import './Movie.scss';
import { Link } from 'react-router-dom';
import { getCurrentMovie } from '../../actions/actions';
import { connect } from 'react-redux';

export const Movie = (props) => {
  return(
    <section className="movie-card">
      <img className='movie-poster-img' src={props.movie.poster_path}/>
      <div className="movie-card-bottom">
        <p className="average-rating">
        Avg. Rating: {Math.round(props.movie.average_rating)} / 10
        </p>
        <h2 className="movie-title">{props.movie.title}</h2>
        <Link to={`/movies/${props.movie.id}`}>
          <button className="movie-button" onClick={() => props.getCurrentMovie(props.movie)}>Start the Show</button>
        </Link>
      </div>
    </section>
  )
}

export const mapDispatch = dispatch => ({
  getCurrentMovie: movie => dispatch(getCurrentMovie(movie))
})

export default connect(null, mapDispatch)(Movie)
