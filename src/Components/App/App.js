import React, { Component } from 'react';
import { getMovies } from '../../actions/actions';
import './App.scss';
import Nav from '../Nav/Nav';

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v1/movies')
    .then(res => res.json())
  }

  render() {
    return(
      <body>
        <Nav />
      </body>
    )
  }
}

export default App;
