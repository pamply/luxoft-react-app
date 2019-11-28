import React from "react";

export const Main = props => {
  let welcomeMsg = "Please log in or create a new account";

  if(props.location.state) {
    const { email } = props.history.location.state;
    welcomeMsg = `Hello ${email}`
  }
    
  return <div>{welcomeMsg}</div>;
};
