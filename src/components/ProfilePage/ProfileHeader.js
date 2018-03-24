import React, { Component } from 'react';
import ProfileSearch from './ProfileSearch';
import '../../styles/profileHeader.css';

// need to get rid of the background color later
class ProfileHeader extends Component {
	render() {
		return (
			<div id="profileHeader" className="navbar">
				<ul id="profileNav" className="nav">
					<li><a href="/"><img id="profileHeader-logo" src={require('../../images/logo2x.png')}/></a></li>
					<li id="profileSearchField"><ProfileSearch /></li>
					<li className=""><a href="/">Home</a></li>
					<li className=""><a href="#">Profile</a></li>
					<li className="icon1"><a href="#">Events</a></li>
					<li><a href="#">Jobs</a></li>
					<li className="icon1"><a href="#"><i className="material-icons">message</i></a></li>
					<li className="icon2"><a href="#"><i className="material-icons">notifications</i></a></li>
					<li className="icon3"><a href="#"><i className="material-icons">person_add</i></a></li>
					<li className="icon4"><a href="#"><img id="profileHeader-logo" src={require('../../images/logo2x.png')}/></a></li>
				</ul>
			</div>
		);
	}
}

export default ProfileHeader;
