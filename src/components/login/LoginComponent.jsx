/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { users } from '../../utils/GeneralConstants'
import GeneralInputComponent from '../layouts/GeneralInputComponent.jsx'

export class LoginComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      message: '',
      isSuccess: true
    }
  }

  resetAlertMessage = () => {
    setTimeout(() => {
      this.setState({
        message: ''
      })
    }, 3000)
  }

  clearFormData = () => {
    this.setState({
      password: '',
      email: ''
    })
  }

  onChange = e => {
    const { target: { value, name } } = e
    this.setState({
      [name]: value
    })
  }

  onClickSubmit = () => {
    const { email, password } = this.state
    const userFound = users.findIndex(
      user => user.email === email && user.password === password
    )

    if (userFound !== -1) {
      this.props.history.push('/main', { email: this.state.email })
    } else {
      this.setState({
        message: 'Login Failed, Please try with different credentials',
        isSuccess: false
      })
      this.resetAlertMessage()
      this.clearFormData()
    }
  }

  render () {
    return (
      <>
        <div className="form-group">
          Welcome to Secret Santa App
        </div>
        {this.state.message &&
          (this.state.isSuccess ? (
            <div className="alert alert-success" role="alert">
              {this.state.message}
            </div>
          ) : (
            <div className="alert alert-danger" role="alert">
              {this.state.message}
            </div>
          ))}
        <form>
          <GeneralInputComponent
            name="email"
            id="username"
            type="email"
            label="Email address"
            placeHolder="Enter email"
            hlpMsg="We'll never share your email with anyone else."
            onChange={this.onChange}
            value={this.state.email}
          />

          <GeneralInputComponent
            name="password"
            id="password"
            type="password"
            label="Password"
            placeHolder="Password"
            onChange={this.onChange}
            value={this.state.password}
          />

          <div className="form-group">
            <Link to='/register' >I'm a new User</Link>
          </div>
          <div className="form-group">
            <Link to='/reset' >Reset password</Link>
          </div>
          <button
            type="button"
            onClick={this.onClickSubmit}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </>
    )
  }
}
