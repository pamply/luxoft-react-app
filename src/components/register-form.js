import React from 'react'
import { Input } from "./shared/input";
import { Select } from "./shared/select";
import { BinaryCheckRadio } from './shared/binaryCheckRadio';
import { Checkbox } from './shared/checkbox';

const listOfPreferences = ['books', 'music', 'movies', 'pets', 'sports']

export class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.fillAgesDropdown = this.fillAgesDropdown.bind(this)
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      preferences: [],
      age: 20,
      isMale: true,
      touched: {
        email: false,
        password: false,
        passwordConfirm: false,
      }
    }
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  }

  onChangeInputText = e => {
    const { target } = e;
    this.setState({
      [target.id]: target.value,
    });
  }

  onChangePreference = (e, preference) => {
    const { checked } = e.target
    if (checked) {
      this.setState(currState => {
        currState.preferences.push(preference)
        return {
          preferences: currState.preferences
        }
      })
    } else {
      this.setState(currState => {
        const idx = currState.preferences.findIndex(
          pref => pref === preference
        )
        currState.preferences.splice(idx, 1)
        return {
          preferences: currState.preferences
        }
      })
    }
  };

  onChangeAge = e => {
    const { value: age } = e.target
    this.setState({ age })
  };

  onChangeGender = (_, isMale) => {
    this.setState({
      isMale
    })
  };

  fillAgesDropdown() {
    const options = []
    for (let i = 18; i < 100; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      )
    }
    return options
  }

  saveUser = () => {
    this.props.history.push('/main', { email: this.state.email })
  };

  isValidEmail = () => {
    const { email } = this.state
    const emailParts = email.split('@')
    return !(
      emailParts.length !== 2 ||
      emailParts[0] === '' ||
      emailParts[1] === ''
    )
  };

  isValidPassword = () => {
    const { password, passwordConfirm } = this.state;
    return !(password === '' || password !== passwordConfirm);
  };

  isValidPreferences = () => {
    const { preferences } = this.state
    return preferences.length !== 0;
  };

  isValid = () =>
    this.isValidEmail() && this.isValidPassword() && this.isValidPreferences()

  render() {
    return (
      <>
        <form>
          <Input
            type="email"
            id="email"
            value={this.state.email}
            placeholder="Enter email"
            label="Email address"
            onChangeInputText={this.onChangeInputText}
            validation={this.isValidEmail}
            toggleError={this.state.touched.email}
            onBlur={this.handleBlur}
            errorText="Please provide a valid email." />
          <Input
            type="password"
            id="password"
            value={this.state.password}
            placeholder="Password"
            toggleError={this.state.touched.password}
            label="Password"
            onChangeInputText={this.onChangeInputText}
            validation={this.isValidPassword}
            onBlur={this.handleBlur} />
          <Input
            type="password"
            id="passwordConfirm"
            value={this.state.passwordConfirm}
            toggleError={this.state.touched.passwordConfirm}
            placeholder="Password" label="Confirm Password"
            onChangeInputText={this.onChangeInputText}
            validation={this.isValidPassword}
            onBlur={this.handleBlur} />
          <Checkbox
            label="Select preferences"
            onChange={this.onChangePreference}
            selectedElements={this.state.preferences}
            listOfElements={listOfPreferences}
            id="preferences" />
          <Select
            onChange={this.onChangeInputText}
            value={this.state.age}
            fillDropdown={this.fillAgesDropdown}
            id="age" />
          <BinaryCheckRadio
            onChange={this.onChangeGender}
            option1="Male"
            option2="Female"
            type="radio"
            label="Select gender"
            status={this.state.isMale} />
          <button
            disabled={!this.isValid()}
            onClick={this.saveUser}
            type="button"
            className="btn btn-primary"
          >
            Save
          </button>
          <button style={{ marginLeft: "10px" }}
            onClick={() => this.props.history.push('/')}
            type="button"
            className="btn btn-secondary"
          >
            Back
          </button>
        </form>
      </>
    )
  }
}
