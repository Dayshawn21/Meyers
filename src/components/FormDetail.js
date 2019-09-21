import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import FormControl from 'material-ui/SelectField';
import Select from 'material-ui/SelectField';

import RaisedButton from 'material-ui/RaisedButton';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from './Error';

export class FormDetail extends Component {
	continue = (e) => {
		e.preventDefault();

		this.props.nextStep();
	};

	render() {
		const { values, handleChange } = this.props;

		return (
			<MuiThemeProvider>
				<Fragment>
					<Appbar title="Myers Distributing Job Application" />

					<TextField
						hintText="Enter Your First Name "
						floatingLabelText="First Name"
						onChange={handleChange('firstName')}
						value={values.firstName}
					/>
					<br />
					<TextField
						hintText="Enter Your Last  Name "
						floatingLabelText="Last Name"
						onChange={handleChange('lastName')}
						defaultValue={values.lastName}
					/>
					<br />
					<TextField
						hintText="Enter Your Email "
						floatingLabelText="Email"
						id="standard-error"
						label="Error"
						onChange={handleChange('email')}
						defaultValue={values.email}
					/>

					<br />
					<TextField
						hintText="Enter Your Phone Number  "
						floatingLabelText="Phone Number"
						onChange={handleChange('phone')}
						defaultValue={values.phone}
					/>
					<br />

					<Select
						defaultValue={values.types}
						onChange={handleChange([])}
						hintText="How did you hear about us   "
						floatingLabelText="How did you hear about us"
					>
						<MenuItem value={values.types}>Online</MenuItem>
						<MenuItem value={values.types}>Family or Friends</MenuItem>
						<MenuItem value={values.types}>Other</MenuItem>
					</Select>

					<br />
					<RaisedButton label="Continue" primary={true} style={styles.button} onClick={this.continue} />
				</Fragment>
			</MuiThemeProvider>
		);
	}
}
const styles = {
	button      : {
		margin : 15
	},
	formControl : {
		minWidth : 120
	}
};

export default FormDetail;
