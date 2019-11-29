import React from "react";

export const Main = props => {
    let welcomeMsg;

    try {
        const {email} = props.history.location.state;
        welcomeMsg = `Hello ${email}`
    } catch (e) {
        if (e instanceof TypeError) {
            welcomeMsg = "Please log in or create a new account"
        }
    }

    return <div>{welcomeMsg}</div>;
};
