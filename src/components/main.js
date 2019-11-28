import React from "react";

export const Main = props => {
  const { email } = props.history.location.state;


  return (<>
    <div>Hello {email}</div>
    <button
      type="button"
      onClick={() => props.history.push("reset")}
      className="btn btn-primary"
    >
      Reset Password
  </button>
  </>);
};
