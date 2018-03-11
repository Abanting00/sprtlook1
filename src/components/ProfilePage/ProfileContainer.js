import React, { Component } from 'react';
import About from './About';

const dummyData = {
	position: 'Center Midfield, Striker',
	class: 'Sophomore',
	hometown: 'New York, New York',
	born: 'May 2, 1997 (20)',
	height: '5-7 ft',
	nationality: 'Mexican'
}

class ProfileContainer extends Component {
	render() {
		return (
			<div className="Profile">
				<About data={dummyData}/>
			</div>
		);
	}
}

export default ProfileContainer;