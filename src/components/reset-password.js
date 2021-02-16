import React from 'react'

const users = [
  {
    email: 'test@luxoft.com',
    password: 'luxoft'
  }
]

export class ResetPassword extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      message: '',
      isSuccess: true
    }
    this.onChangeConfirmNewPassword = this.onChangeConfirmNewPassword.bind(this)
    this.onChangeNewPassword = this.onChangeNewPassword.bind(this)
    this.onChangeOldPassword = this.onChangeOldPassword.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
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
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    })
  }

  onChangeEmail(e) {
    const { value: email } = e.target
    this.setState({
      email
    })
  }

  onChangeNewPassword(e) {
    const { value: newPassword } = e.target
    this.setState({
      newPassword
    })
  }

  onChangeConfirmNewPassword(e) {
    const { value: confirmNewPassword } = e.target
    this.setState({
      confirmNewPassword
    })
  }

  onChangeOldPassword(e) {
    const { value: oldPassword } = e.target
    this.setState({
      oldPassword
    })
  }


  onClickSubmit() {
    const { email, oldPassword, newPassword, confirmNewPassword } = this.state
    const userFound = users.findIndex(
      user => user.email === email && user.password === oldPassword
    )

    if (userFound !== -1) {
      if (newPassword !== '' && newPassword === confirmNewPassword) {
        //everything's fine, change password
        this.setState({
          message: 'password changed successfully',
          isSuccess: true
        })
        this.resetAlertMessage()
        this.resetPassword()
      } else {
        //new password did not match
        this.setState({
          message: 'new password did not match',
          isSuccess: false
        })
        this.resetAlertMessage()
        this.resetPassword()
      }
      //this.props.history.push('/main', { email: this.state.email })
    } else {
      this.setState({
        message: 'Wrong email and password',
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
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword">Current Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              placeholder="Current password"
              onChange={this.onChangeOldPassword}
              value={this.state.oldPassword}
            />
          </div>
          <div>
            <br></br>
            <br></br>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">New Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="New password"
              onChange={this.onChangeNewPassword}
              value={this.state.newPassword}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword2">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Confirm password"
              onChange={this.onChangeConfirmNewPassword}
              value={this.state.confirmNewPassword}
            />
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