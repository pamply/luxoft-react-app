/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import GeneralInputComponent from '../layouts/GeneralInputComponent.jsx'

class ResetPasswordComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      message: '',
      isSuccess: true
    }
  }

  onChange = e => {
    const { target: { value, name } } = e
    this.setState({
      [name]: value
    })
  }

  onClickSubmit = () => {
    const { email } = this.state
    this.setState({
      isSuccess: true,
      message: `You will get and email to  ${email} with the instructions`
    })
  }

  render () {
    return (
      <>
        <div className="form-group">
          If you requiere to reset your password please write your e-mail and we will send you a link with the instructions
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

          <div className="form-group">
            <Link to='/register' >I'm a new User</Link>
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

export default ResetPasswordComponent
