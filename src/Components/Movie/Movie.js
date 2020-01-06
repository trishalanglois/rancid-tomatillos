import React from 'react';
import './Movie.scss';
import { Link } from 'react-router-dom';
import { getCurrentMovie } from '../../actions/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Movie = (props) => {
  let userRating;
  if (props.user) {
    userRating = props.ratings.find(rating => rating.movie_id === props.movie.id)
  }

  return(
    <section className="movie-card" onClick={() => props.getCurrentMovie(props.movie)}>
      <Link to={`/movies/${props.movie.id}`}>
      <img className='movie-poster-img' src={props.movie.poster_path}/>
      </Link>
      <div className="movie-card-bottom">
        <p className="average-rating">
        Avg. Rating: {Math.round(props.movie.average_rating)} / 10
        </p>
        {userRating &&  <p className="user-rating"> Your Rating: {userRating.rating}</p>}
        <h2 className="movie-title">{props.movie.title}</h2>
        <Link to={`/movies/${props.movie.id}`}>
          <button className="movie-button" onClick={() => props.getCurrentMovie(props.movie)}>START THE SHOW</button>
        </Link>
      </div>
    </section>
  )
}


export const mapState = state => ({
  user: state.currentUser,
  ratings: state.ratings
})

export const mapDispatch = dispatch => ({
  getCurrentMovie: movie => dispatch(getCurrentMovie(movie))
})

export default connect(mapState, mapDispatch)(Movie)

Movie.propTypes = {
  user: PropTypes.object,
  ratings: PropTypes.array,
  movie: PropTypes.object,
  getCurrentMovie: PropTypes.func
}
