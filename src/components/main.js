import React from 'react';

export const Main = props => {
  const { email } = props.history.location.state
  return <div>Hello {email}</div>
};
