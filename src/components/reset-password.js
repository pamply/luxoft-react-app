import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './nav-bar';

export const ResetPassword = () => (
	<>
		<NavBar isLoggedIn={false} />
		<div className="content bg-light">
			<h1 className="text-center">Chnge your password</h1>
			<div className="form-container">
				<form>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">New Password</label>
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
						/>
					</div>
					<div className="form-group">
						<Link to="/">Login</Link>
					</div>
					<button type="button" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</div>
	</>
);
