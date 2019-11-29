import React from "react";

export const Main = props => {
    let welcomeMsg;

    if (props.history) {
        if (props.history.location.state) {
            const { email } = props.history.location.state;
            welcomeMsg = `Hello ${email}`
        } else {
            welcomeMsg = "Please log in or create a new account"
        }
    }
    return <div>{welcomeMsg}</div>;
};




