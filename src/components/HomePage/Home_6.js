import React, { Component } from 'react';
import '../../styles/HomePage/home6.css';
import Membership from './membership'

class Home_6 extends Component {
  	render() {
    	return(
			<div className = "home-6-container">
				<h1> Get Sprtlook. </h1>				
				<div className= "comp-1">
					<Membership 
						type="Free" 
						price="0.00"/> 
				</div>
				<div className= "comp-2">
					<Membership 
						type="Premium" 
						price="30.00" 
						contract = "3-month contract"/> 
				</div>
				<span className="test"></span>
			</div>
		);
	}
}

export default Home_6;
