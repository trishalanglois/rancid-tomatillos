import React from 'react';
import './MoviesContainer.scss';
import Movie from '../Movie/Movie';
import Loader from '../Loader/Loader';
import { connect } from 'react-redux';

const MoviesContainer = (props) => {
  const { movies } = props;
  if (!movies.length){
    return <Loader />
  }
    const displayMovies = movies.map(movie => {
      return(
        <Movie
        movie={movie}
        key={movie.id}
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
  movies: state.movies
});

export default connect(mapState)(MoviesContainer);
