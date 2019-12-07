/* eslint-disable react/no-children-prop */
import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const LoginForm = lazy(() =>
	import(/* webpackChunkName: "login-form" */ './login-form')
);
const RegisterForm = lazy(() =>
	import(/* webpackChunkName: "register-form" */ './register-form')
);
const Main = lazy(() => import('./main'));
const NotFound = lazy(() => import('./not-found'));

export const Routes = () => (
	<Suspense fallback={<div>Loading...</div>}>
		<Switch>
			<Route children={props => <LoginForm {...props} />} exact path="/" />
			<Route
				children={props => <RegisterForm {...props} />}
				exact
				path="/register"
			/>
			<Route
				children={props => <RegisterForm {...props} />}
				exact
				path="/register"
			/>
			<Route children={props => <Main {...props} />} exact path="/main" />
			<Route path="*">
				<NotFound />
			</Route>
		</Switch>
	</Suspense>
);
