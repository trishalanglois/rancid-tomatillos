import React, { Component } from 'react';
import './MovieShowPage.scss';
import { postRating } from '../../apiCalls';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class MovieShowPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: null
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: Number(e.target.value) })
  }

  submitRating = (rating, movieId, userId) => {
    postRating(rating, movieId, userId)
      .catch(err => console.log(err))
  }

  findMatchingRating = (ratings, id) => {
    return ratings.some(rating => rating.movie_id === id)
  }

  hasRating = () => {
    const { currentMovie, currentUser, ratings } = this.props;
    const movieRating = this.findMatchingRating(ratings, currentMovie.id);
    if (!movieRating) {
      return (<div className='rating-div'>
        <label>Rate This Movie</label>
        <select
          className='rating-selector'
          name='rating'
          value={this.state.rating}
          onChange={(e) => this.handleChange(e)}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
        </select>
        <button className='rate-movie-button' onClick={() => this.submitRating(this.state.rating, currentMovie.id, currentUser.id)}>Submit Rating</button>
      </div>
      )
    } else {
      return (
        <h3>Your Rating: {ratings.find(rating => rating.movie_id === currentMovie.id).rating}</h3>
      )
    }
  }

  render() {
    const { currentMovie } = this.props
    return (
      <main>
        <article>
          <img className='movie-backdrop' src={currentMovie.backdrop_path} alt='large banner with characters from film' />
          <section className='show-page-info'>
            <h2>{currentMovie.title}</h2>
            <h3>{currentMovie.release_date}</h3>
            <h3>Average Rating: {Math.round(currentMovie.average_rating)}</h3>
            {this.hasRating()}
            <div>{currentMovie.user_rating}</div>
            <p>{currentMovie.overview}</p>
          </section>
        </article>
      </main>
    )
  }
}

export const mapState = state => ({
  currentMovie: state.currentMovie,
  currentUser: state.currentUser,
  ratings: state.ratings,
})

export default connect(mapState)(MovieShowPage)

MovieShowPage.propTypes = {
  ratings: PropTypes.array,
  currentMovie: PropTypes.object,
  currentUser: PropTypes.object
}
