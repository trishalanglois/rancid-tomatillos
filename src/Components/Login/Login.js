import React, { Component } from 'react';
import './Login.scss';
import { getUser } from '../../apiCalls'
import { connect } from 'react-redux'
import { currentUser } from '../../actions/actions'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLogin = (e) => {
    e.preventDefault()
    getUser(this.state.email, this.state.password)
    .then(user => this.props.currentUser(user))
    .catch(err => console.log(err))
  }

  render() {
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
          Login</button>
      </form>
    )
  }
}

const mapDispatch = dispatch => ({
  currentUser: user => dispatch( currentUser(user) )
})

export default connect(null, mapDispatch)(Login);
