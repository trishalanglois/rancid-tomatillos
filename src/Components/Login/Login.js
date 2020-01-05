import React, { Component } from 'react';
import './Login.scss';
import { getUser, getUserRatings } from '../../apiCalls';
import { connect } from 'react-redux';
import { currentUser, loggedIn, getRatings } from '../../actions/actions';
import { Redirect } from 'react-router-dom';
import Error from '../Error/Error';


export class Login extends Component {
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

  handleLogin = async (e) => {
    e.preventDefault()
    const userInfo = await getUser(this.state.email, this.state.password)
    this.props.currentUser(userInfo)
    if(this.props.currentUser) {
      this.props.loggedIn(true)
    }
    this.handleGetUserRatings(userInfo.user.id)
  }

  handleGetUserRatings = (userId) => {
    getUserRatings(userId)
      .then(res => this.props.getRatings(res.ratings))
      .catch(err => console.log(err))
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to='/' />
    } if (this.state.error) {
      return <Error errorMessage={this.state.error}/>
    }
    return (
      <form>
      <div className="input-wrapper">
        <label className="login-label" for='user-email'>email</label>
        <input
          className='login-input login-input-email'
          value={this.state.name}
          name='email'
          type='text'
          onChange={(e) => this.handleChange(e)}
        />
      </div>
      <div className="input-wrapper">
        <label className="login-label" for='user-password'>password</label>
        <input
          className='login-input login-input-password'
          value={this.state.password}
          name='password'
          type='password'
          onChange={(e) => this.handleChange(e)}
        />
        <button
          className="login-button"
          type='button'
          onClick={(e) => this.handleLogin(e)}
        >
          Login
        </button>
      </div>
    </form>
    )
  }
}

export const mapState = state => ({
  isLoggedIn: state.loggedIn
})

export const mapDispatch = dispatch => ({
  currentUser: user => dispatch(currentUser(user)),
  loggedIn: boolean => dispatch(loggedIn(boolean)),
  getRatings: ratings => dispatch(getRatings(ratings))
})

export default connect(mapState, mapDispatch)(Login);
