import React from 'react'
import { LogStatusContext } from './Contexts/LogStatusContext'

const listOfPreferences = ['books', 'music', 'movies', 'pets', 'sports']

export class RegisterForm extends React.Component {
  constructor (props) {
    super(props)
    this.fillAgesDropdown = this.fillAgesDropdown.bind(this)
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      preferences: [],
      age: 20,
      isMale: true
    }
  }

  onChangeEmail = e => {
    const { value: email } = e.target
    this.setState(
      {
        email
      },
      () => {
        const newClass = this.isValidEmail() ? 'is-valid' : 'is-invalid'
        this.setState({ mailClassName: newClass })
      }
    )
  };

  onChangePassword = e => {
    const { value: password } = e.target
    this.setState(
      {
        password
      },
      () => {
        const newClass = this.isValidPassword() ? 'is-valid' : 'is-invalid'
        this.setState({ passwordClassName: newClass })
      }
    )
  };

  onChangeConfirmPassword = e => {
    const { value: passwordConfirm } = e.target
    this.setState(
      {
        passwordConfirm
      },
      () => {
        const newClass = this.isValidPassword() ? 'is-valid' : 'is-invalid'
        this.setState({ passwordClassName: newClass })
      }
    )
  };

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

  fillAgesDropdown () {
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

  isValidPreferences = () => {
    const { preferences } = this.state
    if (preferences.length === 0) {
      return false
    }
    return true
  };

  isValid = () => {
    return (
      this.isValidEmail() && this.isValidPassword() && this.isValidPreferences()
    )
  };

  render () {
    const { mailClassName, passwordClassName, email, preferences, age, isMale } = this.state
    return (
      <>
        {this.state.isSuccess && (
          <div className="alert alert-success" role="alert">
            Successfully saved
          </div>
        )}
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              autoComplete="on"
              className={`form-control ${mailClassName}`}
              placeholder="Enter email"
              value={email}
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
              autoComplete="on"
              className={`form-control ${passwordClassName}`}
              placeholder="Password"
              value={this.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <label>Confirm password</label>
            <input
              type="password"
              autoComplete="on"
              className={`form-control ${passwordClassName}`}
              placeholder="Confirm password"
              value={this.passwordConfirm}
              onChange={this.onChangeConfirmPassword}
            />
          </div>

          <div className="form-group">
            <label>Select preferences</label>
            <br />
            {listOfPreferences.map(preference => (
              <div className="form-check form-check-inline" key={preference}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={preference}
                  onChange={e => this.onChangePreference(e, preference)}
                  checked={
                    !!preferences.find(pref => preference === pref)
                  }
                />
                <label className="form-check-label">{preference}</label>
              </div>
            ))}
          </div>

          <div className="form-group">
            <label>Select age</label>
            <select
              onChange={this.onChangeAge}
              value={age}
              className="custom-select"
            >
              {this.fillAgesDropdown()}
            </select>
          </div>

          <div className="form-group">
            <label>Select gender</label>
            <div
              className="custom-control custom-radio"
              onClick={e => this.onChangeGender(e, true)}
            >
              <input
                type="radio"
                className="custom-control-input"
                checked={isMale}
              />
              <label className="custom-control-label">Male</label>
            </div>
            <div
              className="custom-control custom-radio"
              onClick={e => this.onChangeGender(e, false)}
            >
              <input
                type="radio"
                className="custom-control-input"
                checked={!isMale}
              />
              <label className="custom-control-label">Female</label>
            </div>
          </div>
          <div className="form-group">
            <label>Select gender</label>
            <div
              className="custom-control custom-radio"
              onClick={e => this.onChangeGender(e, true)}
            >
              <input
                type="radio"
                className="custom-control-input"
                checked={this.state.isMale}
              />
              <label className="custom-control-label">Male</label>
            </div>
            <div
              className="custom-control custom-radio"
              onClick={e => this.onChangeGender(e, false)}
            >
              <input
                type="radio"
                className="custom-control-input"
                checked={!this.state.isMale}
              />
              <label className="custom-control-label">Female</label>
            </div>
          </div>
          <LogStatusContext.Consumer>
            {({ LogInStatus }) => (
              <button
                disabled={!this.isValid()}
                onClick={() => {
                  this.saveUser()
                  LogInStatus()
                }}
                type="button"
                className="btn btn-primary"
              >
                Save
              </button>
            )}
          </LogStatusContext.Consumer>
        </form>
      </>
    )
  }
}
