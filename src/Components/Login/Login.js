import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form>
        <label for='user-name'>Name</label>
        <input 
          className='login-input'
          value={this.state.name} 
          name='name'
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
        <button type='button'>Login</button>
      </form>
    )
  }
}

export default Login;