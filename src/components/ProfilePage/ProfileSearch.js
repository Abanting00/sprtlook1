import React, { Component } from 'react';
import '../../styles/profileHeader.css';

// need to get rid of the background color later
class ProfileSearch extends Component {
	render() {
		return (
			<div>
				<form id="formContainer">
					<input id="inputField" type="text" placeholder="Search"/>
					<button id="inputButton" type="submit"><i className="material-icons">search</i></button>
				</form>
			</div>
		);
	}
}

export default ProfileSearch;
