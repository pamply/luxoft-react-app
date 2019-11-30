import React, { Component, createContext } from 'react'

export const LogStatusContext = createContext()

export class LogProvider extends Component {
    state = { isLoggedIn: false };

    LogInStatus = () => {
      this.setState({ isLoggedIn: true })
    };

    LogOutStatus = () => {
      this.setState({ isLoggedIn: false })
    };

    render () {
      return (
        <LogStatusContext.Provider
          value={{ status: this.state.isLoggedIn, LogInStatus: this.LogInStatus, LogOutStatus: this.LogOutStatus }}
        >
          {this.props.children}
        </LogStatusContext.Provider>
      )
    }
}
