import React, { Component } from 'react'

const SuccessPrompt = () => (
  <div className="alert alert-success" role="alert">Success!</div>
)

const ResetForm = props => (
  <form>
    <div className="reset-pwd-group form-group d-flex flex-column">
      <label className="reset-label" htmlFor="reset-pwd">Reset your password</label>
      <input
        id="reset-pwd"
        type="password"
        className="reset-input"
        placeholder="******"
        value={props.emailValue}
        onChange={props.handleChange}
      />
      <button onClick={props.onSubmit}
        className="invalid-feedback btn btn-primary">
                Go!
      </button>
    </div>
  </form>
)

export class ResetPassword extends Component {
    state = { password: '', submitted: false };

    handleInputChange = e => {
      const { value: password } = e.target
      this.setState({
        password
      })
    };

    validateEntry = () => {
      if (this.state.password.length > 2) {
        this.setState({ submitted: true })
      }
    };

    render () {
      const { email, submitted } = this.state
      const display = !submitted
        ? <ResetForm
          handleChange={this.handleInputChange}
          emailValue={email}
          onSubmit={this.validateEntry} />
        : <SuccessPrompt />

      return display
    }
}
