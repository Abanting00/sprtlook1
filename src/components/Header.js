import React, { Component } from 'react';
import '../styles/header.css';

// need to get rid of the background color later

class Header extends Component {
	constructor() {
		super();

		this.state = {
			side_width = 0
		}
	}

	openNav() {
		this.setState({side_width: 100%})
}

	render() {
		return (
			<div className="navbar">
				<ul style = {{width: this.state.side_width}} className="nav sidenav">
					<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
					<li className="logo"><a href="#"><img src={require('../images/Group 4.png')}/></a></li>
				  	<li className="athletes"><a href="#">Athlete</a></li>
				  	<li className="coach"><a href="#">Coach</a></li>
				  	<li className="login"><a href="#">Login</a></li>
				</ul>
				<div><span onClick="openNav()">open</span>	fasf</div>
			</div>
		);
	}
}

export default Header;