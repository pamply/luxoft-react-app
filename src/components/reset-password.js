import React from "react";
import { Link } from "react-router-dom";

const users = [
  {
    email: "test@luxoft.com",
    password: "luxoft"
  }
];
export default class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      cPassword: "",
      message: "",
      isSuccess: true
    };
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangecPassword = this.onChangecPassword.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.resetAlertMessage = this.resetAlertMessage.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
  }

  resetAlertMessage() {
    setTimeout(() => {
      this.setState({
        message: ""
      });
    }, 1000);
  }

  resetPassword() {
    this.setState({
      password: "",
      cPassword: ""
    });
  }

  onChangeEmail(e) {
    const { value: email } = e.target;
    this.setState({
      email
    });
  }

  onChangePassword(e) {
    const { value: password } = e.target;
    this.setState({
      password
    });
  }

  onChangecPassword(e) {
    const { value: cPassword } = e.target;
    this.setState({
      cPassword
    });
  }

  onClickSubmit() {
    const { email, password, cPassword } = this.state;
    const userFound = users.findIndex(
      user => user.email === email && user.password === password
    );

    if (userFound !== -1) {
      this.props.history.push("/");
    } else {
      this.setState({
        message: `Reset Failed, Please try with different credentials`,
        isSuccess: false
      });
      this.resetAlertMessage();
      this.resetPassword();
    }
  }

  goToRegister = () => {
    this.props.history.push("/register");
  };

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
            <label htmlFor="exampleInputPassword2">New Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Password"
              onChange={this.onChangecPassword}
              value={this.state.cPassword}
            />
          </div>
          <div className="form-group">
            <Link to="/">
              Sign In
            </Link>
          </div>
          <button
            type="button"
            onClick={this.onClickSubmit}
            className="btn btn-primary"
          >
            Reset Password
          </button>
        </form>
      </>
    );
  }
}
