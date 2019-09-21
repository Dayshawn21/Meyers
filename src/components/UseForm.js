import React, { Component } from 'react';
import FormDeatail from './FormDetail';
import Confirm from './Confirm';
import Success from './Success';

export class UseForm extends Component {
	state = {
		step       : 1,
		firstName  : '',
		lastName   : '',
		phone      : '',
		email      : '',
		types      : [
			'online',
			'family',
			'other'
		],
		emailError : '',
		phoneError : ''
	};

	//Proceed to next Step

	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step : step + 1
		});
	};

	//Go back to prev Step

	previosStep = () => {
		const { step } = this.state;
		this.setState({
			step : step - 1
		});
	};

	//Validate

	validate = () => {
		let phoneError = '';
		let emailError = '';
		if (!this.state.email.includes('@')) {
			emailError = 'invalid email';
		}
		if (!this.state.phone) {
			phoneError = ' Enter Phone Number';
		}
		return true;
	};
	//handle field Change

	handleChange = (input) => (e) => {
		this.setState({
			[input] : e.target.value
		});
	};
	render() {
		const { step } = this.state;
		const { firstName, lastName, email, phone, types, emailError, phoneError } = this.state;
		const values = { firstName, lastName, email, phone, types, emailError, phoneError };

		switch (step) {
			case 1:
				return <FormDeatail nextStep={this.nextStep} handleChange={this.handleChange} values={values} />;
			case 2:
				return <Confirm nextStep={this.nextStep} previosStep={this.previosStep} values={values} />;
			case 3:
				return <Success />;
		}
		return <div />;
	}
}

export default UseForm;
