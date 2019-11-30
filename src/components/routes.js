/* eslint-disable react/no-children-prop */
import { RegisterForm } from './register-form';
import { LoginForm } from './login-form';
import { Main } from './main';
import { NotFound } from './not-found';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ResetPassword } from './reset-password';
import { About } from './about';

export const Routes = () => (
	<Switch>
		<Route children={props => <LoginForm {...props} />} exact path="/" />
		<Route children={props => <RegisterForm {...props} />} path="/register" />
		<Route children={props => <About {...props} />} path="/about" />
		<Route children={props => <ResetPassword {...props} />} path="/reset-password" />
		<Route children={props => <Main {...props} />} path="/main" />
		<Route path="*">
			<NotFound />
		</Route>
	</Switch>
);
