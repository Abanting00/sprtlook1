import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader';
import '../../styles/profileRightSection.css';


class Profile_RightSection extends Component {
	render() {
		return (
			<div className="Profile_RightSection">
				<ul id="section-buttons">
					<li><a id="add-profile" href="#">Add Profile section <i className="material-icons">keyboard_arrow_down</i></a></li>
					<li><a id="edit-profile" href="#">Edit Profile</a></li>
				</ul>
			</div>
		);
	}
}

export default Profile_RightSection;