import React from 'react';
import './MoviesContainer.scss';
import { connect } from 'react-redux';

const MoviesContainer = (props) => {
  console.log(props)
  return(
    <main>
      <h2>Scott rocks</h2>
    </main>
  )
}

const mapState = state => ({
  movies: state.getMovies
});

export default connect(mapState)(MoviesContainer);