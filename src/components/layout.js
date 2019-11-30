import React from 'react';
import { Routes } from './routes';

export const Layout = props => (
	<div className="container-fluid">
		<Routes {...props} />
	</div>
);
