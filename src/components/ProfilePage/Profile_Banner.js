import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader';
import '../../styles/profileBanner.css';


class Profile_Banner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.data.name,
			bio: this.props.data.bio,
			connections: this.props.data.connections,
			sport: this.props.data.sport
		}
	}

	render() {
		return (
			<div className="Profile_Banner">
				<div className="profileBanner">
					<img id="imgBanner" src="https://tandsgo.com/wp-content/uploads/2015/03/linkedin-08.jpg" />
					<img id="profilePicture" src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png" />
					<div id="imgBannerInfo">
						<p id="nameBanner">{this.state.name}</p>
						<p id="descBanner">{this.state.bio}</p>
						<p id="peopBanner"><i id="icon-spacing" className="material-icons">person</i>{this.state.connections}</p>
					</div>
					<div id="imgBannerInfo2">
						<ul id="bannerNav">
							<li><span className="bannerNavText">{this.state.sport}</span></li>
							<li><a className="bannerNavText" href="#"><i className="material-icons">more_horiz</i></a></li>
							<li><a className="bannerNavText" href="#"><i className="material-icons">mode_edit</i></a></li>
						</ul>
					</div>
				</div>
				<ul id="bannerNav2">
					<li><a className="bannerNavText2" href="#">Dashboard</a></li>
					<li><a className="bannerNavText2" href="#">About</a></li>
					<li><a className="bannerNavText2" href="#">Connections</a></li>
				</ul>
			</div>
		);
	}
}

export default Profile_Banner;