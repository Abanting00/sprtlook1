import React, { Component } from 'react';
import '../styles/footer.css';

class Footer extends Component { 
	render() {
		return (
			<div className="footer">
				<img className="footer-logo" src={require('../images/Group 4.png')}/>
			</div>
		);
	}
}

export default Footer;
