
import React from "react";
import { Input } from "./shared/input";

export class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      password: "",
      passwordConfirm: "",
      touched: {
        currentPassword: false,
        password: false,
        passwordConfirm: false,
      }
    };
  }

  onChangeInputText = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }

  isValidPassword = () => {
    const { password, passwordConfirm } = this.state;
    if (password === "") {
      return false;
    }
    if (password !== passwordConfirm) {
      return false;
    }
    return true;
  };

  isValidCurrentPassword = () => this.state.currentPassword == window.$password

  isValid = () => this.isValidPassword() && this.isValidCurrentPassword()


  savePassword = () => {
    window.$password = this.state.password
    this.props.history.push("/");
  };

  render = () => (
    <form>
      <Input type="password" id="currentPassword" value={this.state.currentPassword} placeholder="Current Password" toggleError={this.state.touched.currentPassword} label="Password"
        onChangeInputText={this.onChangeInputText} validation={this.isValidCurrentPassword} onBlur={this.handleBlur} />
      <Input type="password" id="password" value={this.state.password} placeholder="New Password" toggleError={this.state.touched.password} label="Password"
        onChangeInputText={this.onChangeInputText} validation={this.isValidPassword} onBlur={this.handleBlur} />
      <Input type="password" id="passwordConfirm" value={this.state.passwordConfirm} toggleError
        ={this.state.touched.passwordConfirm} placeholder="Password" label="Confirm Password"
        onChangeInputText={this.onChangeInputText} validation={this.isValidPassword} onBlur={this.handleBlur} />
      <button
        disabled={!this.isValid()}
        onClick={this.savePassword}
        type="button"
        className="btn btn-primary"
      >
        Reset Password
      </button>
    </form>
  );
}