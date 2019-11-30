import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export const NavBar = props => {
	const { isLoggedIn } = props;
	return (
		<nav
			className="navbar navbar-expand-lg navbar"
			style={{ backgroundColor: '#243387' }}
		>
			<a className="navbar-brand" href="#">
				<img src={Logo} height="50" alt="" />
			</a>
			{isLoggedIn ? (
				<div className="navbar-nav text-white">
					<Link className="nav-item nav-link text-light" to="/">
						Home
					</Link>
					<Link className="nav-item nav-link text-light" to="/about">
						About
					</Link>
					<Link className="nav-item nav-link text-light" to="/">
						Log out
					</Link>
				</div>
			) : (
				<></>
			)}
		</nav>
	);
};
