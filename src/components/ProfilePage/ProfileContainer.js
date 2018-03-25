import React, { Component } from 'react';
import About from './About';
import Team from './Team';
import ProfileHeader from './ProfileHeader';
import Profile_Banner from './Profile_Banner';
import Profile_RightSection from './Profile_RightSection';
import '../../styles/profile.css';

const dummyData = {
	position: 'Center Midfield, Striker',
	class: 'Sophomore',
	hometown: 'New York, New York',
	born: 'May 2, 1997 (20)',
	height: '5-7 ft',
	nationality: 'Mexican'
}

const dummyData2 = {
	name: 'Luis Castillo',
	bio: 'Striker at CCNY',
	connections: 200,
	sport: 'Soccer'
}

class ProfileContainer extends Component {
	render() {
		return (
			<div className="Profile">
				<ProfileHeader />
				<div className="ProfileBase">
					<div className="Profile_MainComponents">
						<Profile_Banner data={dummyData2} />
						<About data={dummyData}/>
						<Team />
					</div>
					<div className="Profile_RightComponent">
						<Profile_RightSection />
					</div>
				</div>
			</div>
		);
	}
}

export default ProfileContainer;