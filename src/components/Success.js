import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'material-ui/AppBar';

export class Success extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<Fragment>
					<Appbar title="Success " />
					<h3>
						Thanks for taking the time to apply for our FrontEnd Developer Position. We appreciate your
						interest in Meyer Distributing.{' '}
					</h3>
					<p>
						Hello! We always look forward to go through applications of great people who’d like to work with
						us at Meyer Distributing. Thank you for applying for a position with us, and here’s a
						confirmation that we received your application. One of our recruiters will be reviewing it 1-3
						business days.
					</p>
				</Fragment>
			</MuiThemeProvider>
		);
	}
}

export default Success;
