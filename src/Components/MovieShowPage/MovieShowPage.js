import React, { Component } from 'react';
import './MovieShowPage.scss';
import { postRating } from '../../apiCalls';
import { connect } from 'react-redux';
import { currentUser } from '../../reducers/currentUser';

class MovieShowPage extends Component {
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

  render() {
    const movieRating = this.findMatchingRating(this.props.ratings, this.props.currentMovie.id);
      return (
        <main>
          <article>
            <div>
              <h2>{this.props.currentMovie.title}</h2>
              <h2>Avg Rating: {this.props.currentMovie.average_rating}</h2>
              {
                !movieRating ?  
                <div className='rating-div'>
                    <label>Rate This Movie</label>
                    <select 
                    className='rating-selector'
                    name='rating'
                    value={this.state.rating}
                    onChange={ (e) => this.handleChange(e) }
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
                    <button onClick={ () => this.submitRating(this.state.rating, this.props.currentMovie.id, this.props.currentUser.id) }>Submit Rating</button>
                  </div> 
                  :

                <h2>Your Rating: {this.props.ratings.find(rating => rating.movie_id === this.props.currentMovie.id).rating}</h2>
                }
              <h2>{this.props.currentMovie.release_date}</h2>
            </div>
            <img className='movie-backdrop' src={this.props.currentMovie.backdrop_path} alt='large image with characters from film' />
            <div>{this.props.currentMovie.user_rating}</div>
            <p>{this.props.currentMovie.overview}</p>
          </article>
        </main>
      )
  }
}

export const mapState = state => ({
  currentMovie: state.currentMovie,
  currentUser: state.currentUser,
  ratings: state.ratings
})

export default connect(mapState)(MovieShowPage)
