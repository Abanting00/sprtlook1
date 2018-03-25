import React, { Component } from 'react';
import faker from 'faker';
import '../../styles/team.css';

class Team extends Component {
	render() {
		return (
			<div>
				<div className="team-header">
					<i className="material-icons">verified_user</i>
					<a id="edit-button" href="#"><i className="material-icons">edit</i></a>
				</div>
				<div className="team-imgs">
					<a className="team-item1" href="#"><img src={faker.image.avatar()}/></a>
					<a className="team-item2" href="#"><img src={faker.image.avatar()}/></a>
					<a className="team-item3" href="#"><img src={faker.image.avatar()}/></a>
					<a className="team-item4" href="#"><img src={faker.image.avatar()}/></a>
				</div>
			</div>
		)
	}
}

export default Team;