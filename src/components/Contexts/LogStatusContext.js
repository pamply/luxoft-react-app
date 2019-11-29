import React, {Component, createContext} from "react";

export const LogStatusContext = createContext();

export class LogProvider extends Component {
    state = {isLoggedIn: false};

    toggleLoggedStatus = () => {
        this.setState(state => ({isLoggedIn: !state.isLoggedIn}))
    };

    render() {
        return (
            <LogStatusContext.Provider
                value={{status: this.state.isLoggedIn, toggleLogStatus: this.toggleLoggedStatus}}
            >
                {this.props.children}
            </LogStatusContext.Provider>
        )
    }
}

