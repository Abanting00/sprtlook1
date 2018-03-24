import React, { Component } from 'react';
import '../../styles/header.css';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			side_width: 0,
			side_height: 0,
			display: 'block',
		}

		this.closeNav = this.closeNav.bind(this);
		this.openNav = this.openNav.bind(this);
	}

	openNav() {
		this.setState({
			side_width: 100,
			side_height: 100,
			display: 'none'
			})
	}

	closeNav() {
		this.setState({
			side_width: 0,
			side_height: 0,
			display: 'block'
			})
	}

	render() {
		const style = {
			width: this.state.side_width + '%',
			height: this.state.side_height + '%'
		}

		return (
			<div>
				<div className="sidenav" style ={style}>
				  <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
				  <a className="athletes" href="#">Athlete</a>
				  <a href="#">Coach</a>
				  <a href="#">Find</a>
				  <a href="#">Sign Up</a>
				  <a href="/login">Login</a>
				</div>
				<div className="navbar" style= {{display: this.state.display}}>
					<ul className="nav responsive">
						<li className="logo">
							<a href="/">
								<img src={require('../../images/Logo@1x.png')}/>
							</a>
						</li>
					  	<li className="athletes"><a href="#">Athlete</a></li>
					  	<li className="coach"><a href="#">Coach</a></li>
					  	<li className="login"><a href="/login">Login</a></li>
					  	<li className="mobile"><a href="javascript:void(0);" className="icon" onClick={this.openNav}>&#9776;</a></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Header;