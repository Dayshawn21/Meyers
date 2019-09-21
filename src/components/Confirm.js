import React, { Component, Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Appbar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import Raisebutton from 'material-ui/RaisedButton';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	back = (e) => {
		e.preventDefault();
		this.props.previosStep();
	};
	render() {
		const { values: { firstName, lastName, email, phone, types } } = this.props;
		return (
			<MuiThemeProvider>
				<Fragment>
					<Appbar title="Confirm You Application" />
					<List>
						<ListItem primaryText="First Name" secondaryText={firstName} />
						<ListItem primaryText="Last Name" secondaryText={lastName} />
						<ListItem primaryText="Phone" secondaryText={phone} />
						<ListItem primaryText=" Email" secondaryText={email} />
						<ListItem primaryText="Referral" secondaryText={types} />
					</List>

					<RaisedButton
						label="Continue & Confirm"
						primary={true}
						style={styles.button}
						onClick={this.continue}
					/>
					<RaisedButton label="Back" primary={false} style={styles.button} onClick={this.back} />
				</Fragment>
			</MuiThemeProvider>
		);
	}
}
const styles = {
	button : {
		margin : 15
	}
};

export default Confirm;
