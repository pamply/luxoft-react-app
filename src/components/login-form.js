/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import React from 'react'
import { Input } from "./shared/input"

const users = [
  {
    email: 'test@luxoft.com'
  }
]
export class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      message: "",
      isSuccess: true,
      touched: {
        email: false,
        password: false,
      }
    };
    this.onChangeInputText = this.onChangeInputText.bind(this);
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

  onChangeInputText(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  onClickSubmit() {
    const { email, password } = this.state
    const userFound = users.findIndex(
      user => user.email === email && window.$password === password
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
          <Input
            type="email"
            id="email"
            value={this.state.email}
            placeholder="Enter email"
            label="Email address"
            onChangeInputText={this.onChangeInputText}
            validation={() => { }}
            toggleError={this.state.touched.email}
            onBlur={() => { }}
            helpText="Please provide a valid email."
            helpText2="We'll never share your email with anyone else." />
          <Input
            type="password"
            id="password"
            value={this.state.password}
            placeholder="Password"
            toggleError={this.state.touched.password}
            label="Password"
            onChangeInputText={this.onChangeInputText}
            validation={() => { }}
            onBlur={() => { }} />
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
