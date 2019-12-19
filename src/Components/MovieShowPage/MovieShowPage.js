import React from 'react';
import './MovieShowPage.scss';
import { connect } from 'react-redux';

const MovieShowPage = ({ currentMovie }) => {
  const {id, title, average_rating, user_rating, backdrop_path, overview, release_date} = currentMovie;
    return (
      <main>
        <article>
          <div>
            <h2>{title}</h2>
            <h2>{average_rating}</h2>
            <h2>{release_date}</h2>
          </div>
          <img src={backdrop_path} alt='large image with characters from film' />
          <div>{user_rating}</div>
          <p>{overview}</p>
        </article>
      </main>
    )
}

export const mapState = state => ({
  currentMovie: state.currentMovie
})

export default connect(mapState)(MovieShowPage)
