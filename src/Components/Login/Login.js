import React, { Component } from 'react';
import './Login.scss';
import { getUser } from '../../apiCalls';
import { connect } from 'react-redux';
import { currentUser, loggedIn } from '../../actions/actions';
import { Redirect } from 'react-router-dom';
import Error from '../Error/Error'


class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLogin = (e) => {
    e.preventDefault()
  getUser(this.state.email, this.state.password)
    .then(user => this.props.currentUser(user))
    .then(res => {
      if(this.props.currentUser) {
        this.props.loggedIn(true)
      }})
    .catch(err => this.setState({error: 'Invalid Login, Please Try Again'}))
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to='/' />
    } if (this.state.error) {
      return <Error errorMessage={this.state.error}/>
    }
    return (
      <form>
        <label for='user-email'>email</label>
        <input
          className='login-input'
          value={this.state.name}
          name='email'
          type='text'
          onChange={(e) => this.handleChange(e)}
        />
        <label for='user-password'>Password</label>
        <input
          className='login-input'
          value={this.state.password}
          name='password'
          type='password'
          onChange={(e) => this.handleChange(e)}
        />
        <button
          type='button'
          onClick={(e) => this.handleLogin(e)}
        >
          Login
        </button>
      </form>
    )
  }
}

const mapState = state => ({
  isLoggedIn: state.loggedIn
})

const mapDispatch = dispatch => ({
  currentUser: user => dispatch(currentUser(user)),
  loggedIn: boolean => dispatch(loggedIn(boolean))
})

export default connect(mapState, mapDispatch)(Login);
