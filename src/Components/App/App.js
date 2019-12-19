import React, { Component } from 'react';
import { getMovies } from '../../actions/actions';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import './App.scss';
import Nav from '../Nav/Nav';
import Login from '../Login/Login'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import MovieShowPage from '../MovieShowPage/MovieShowPage';

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
      .then(res => res.json())
      .then(data => this.props.getMovies(data.movies))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <body>
        <Route path='/' render={() =>
          <Nav />
          }
        />
        <Route exact path='/' render={() =>
          <main>
            <MoviesContainer />
          </main>
          }
        />
        <Route path='/login' render={() =>
          <Login />
          }
        />
        <Route path='/movies/:id' render={() =>
            <MovieShowPage />
          }
        />
      </body>
    )
  }
}

const mapDispatch = dispatch => ({
  getMovies: movies => dispatch(getMovies(movies))
})

export default connect(null, mapDispatch)(App)
