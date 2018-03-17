import React, { Component } from 'react';
import faker from 'faker';
import '../../styles/team.css';

class Team extends Component {
	render() {
		return (
			<div>
				<div className="team-header">
					<i className="material-icons">verified_user</i>
					<i className="material-icons">edit</i>
				</div>
				<div className="team-imgs">
					<a href="#"></a>
					<a href="#"></a>
				</div>
			</div>
			)
	}
}