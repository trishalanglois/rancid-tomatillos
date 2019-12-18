import React from 'react';
import './MoviesContainer.scss';
import Movie from '../Movie/Movie';
import { getMovies } from '../../actions/actions';
import { connect } from 'react-redux';

const MoviesContainer = (props) => {
  const { movies } = props;
  if (!movies.length){
    return <h1>Error</h1>
  }
    const displayMovies = movies.map(movie => {
      return(
        <Movie
        {...movie}
        key={movie.id}
          // title={thing.title}
          // poster={thing.poster_path}
          // backdrop={thing.backdrop_path}
          // releaseDate={thing.release_date}
          // overview={thing.overview}
          // averageRating={thing.average_rating}
        />
      )
    })

  return(
    <>
    {displayMovies}
    </>
  )
}

const mapState = state => ({
  movies: state.getMovies
});

export default connect(mapState)(MoviesContainer);