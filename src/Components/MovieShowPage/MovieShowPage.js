import React, { Component } from 'react';
import './MovieShowPage.scss';
import { connect } from 'react-redux';

class MovieShowPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: null
    }
  }

  render() {
    console.log(this.props)
      return (
        <main>
          <article>
            <div>
              <h2>{this.props.currentMovie.title}</h2>
              <h2>{this.props.currentMovie.average_rating}</h2>
              <h2>{this.props.currentMovie.release_date}</h2>
            </div>
            <img className='movie-backdrop' src={this.props.currentMovie.backdrop_path} alt='large image with characters from film' />
            <div>{this.props.currentMovie.user_rating}</div>
            <div className='rating-div'>
              <label>Rate This Movie</label>
              <select className='rating-selector'>
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
              <button>Submit Rating</button>
            </div>
            <p>{this.props.currentMovie.overview}</p>
          </article>
        </main>
      )
  }
}

export const mapState = state => ({
  currentMovie: state.currentMovie
})

export default connect(mapState)(MovieShowPage)
