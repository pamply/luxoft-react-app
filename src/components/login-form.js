/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import React from 'react'
const users = [
  {
    email: 'test@luxoft.com',
    password: 'luxoft'
  }
]
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      message: '',
      isSuccess: true
    }
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onClickSubmit = this.onClickSubmit.bind(this)
    this.resetAlertMessage = this.resetAlertMessage.bind(this)
    this.resetPassword = this.resetPassword.bind(this)
  }

  resetAlertMessage() {
    setTimeout(() => {
      this.setState({
        message: ''
      })
    }, 1000)
  }

  resetPassword() {
    this.setState({
      password: ''
    })
  }

  onChangeEmail(e) {
    const { value: email } = e.target
    this.setState({
      email
    })
  }

  onChangePassword(e) {
    const { value: password } = e.target
    this.setState({
      password
    })
  }

  onClickSubmit() {
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
      this.resetPassword()
    }
  }

  render() {
    return (
      <>
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
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.onChangeEmail}
              value={this.state.email}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={this.onChangePassword}
              value={this.state.password}
            />
          </div>
          <div className="form-group">
            <Link to='/register' >I'm a new User</Link>
          </div>
          <div className="form-group">
            <Link to='/reset' >Reset Password</Link>
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
