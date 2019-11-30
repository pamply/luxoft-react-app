import React from 'react';
import { NavBar } from './nav-bar';

export const Main = props => {
	const { email } = props.history.location.state;
	return (
		<>
			<NavBar isLoggedIn={true} />
			<div>Hello {email}</div>
		</>
	);
};
