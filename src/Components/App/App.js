import React, { Component } from 'react';
import { getMovies } from '../../actions/actions';
import './App.scss';
import Nav from '../Nav/Nav';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    .then(res => res.json())
    .then(movies => this.props.getMovies(movies))
    .catch(err => console.log(err))
  }

  render() {
    return(
      <body>
        <Nav />
      </body>
    )
  }
}

const mapDispatch = dispatch => ({
  getMovies: movies => dispatch( getMovies(movies) )
});

export default connect(null, mapDispatch)(App);