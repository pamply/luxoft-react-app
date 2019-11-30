import React, { Component } from 'react'

export class ResetPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
    }
  }


  onChangeEmail = e => {
    const { value: email } = e.target
    this.setState({
      email
    })
  };

  onChangePassword = e => {
    const { value: password } = e.target
    this.setState({
      password
    })
  };

  onChangeConfirmPassword = e => {
    const { value: passwordConfirm } = e.target
    this.setState({
      passwordConfirm
    })
  };

  isValidEmail = () => {
    const { email } = this.state
    const emailParts = email.split('@')
    if (
      emailParts.length !== 2 ||
      emailParts[0] === '' ||
      emailParts[1] === ''
    ) {
      return false
    }
    return true
  };

  isValidPassword = () => {
    const { password, passwordConfirm } = this.state
    if (password === '') {
      return false
    }
    if (password !== passwordConfirm) {
      return false
    }
    return true
  };


  isValid = () => {
    return (
      this.isValidEmail() && this.isValidPassword()
    )
  };

  render() {
    return (
      <div>
        <h1>Password Reset</h1>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className={`form-control ${
                this.isValidEmail() ? 'is-valid' : 'is-invalid'
                }`}
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
            <div className="invalid-feedback">
              Please provide a valid email.
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className={`form-control ${
                this.isValidPassword() ? 'is-valid' : 'is-invalid'
                }`}
              placeholder="Password"
              value={this.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <label>Confirm password</label>
            <input
              type="password"
              className={`form-control ${
                this.isValidPassword() ? 'is-valid' : ''
                }`}
              placeholder="Confirm password"
              value={this.passwordConfirm}
              onChange={this.onChangeConfirmPassword}
            />
          </div>
          <button
            disabled={!this.isValid()}
            onClick={this.saveUser}
            type="button"
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    )
  }
}
