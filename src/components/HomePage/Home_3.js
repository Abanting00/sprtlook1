import React, { Component } from 'react';
import '../../styles/home.css';
import image from '../../images/Screens.png';

class Home_3 extends Component {
  	render() {
	    return (
		  	<div className = "home-3-container">
		    	<h1> Connect with the best coaches. </h1>
		    	<h3> Friends <span>•</span> Athletes <span>•</span> Trainers </h3>
		    	<img src= {image} />
		    	<button className="btn-2">Sign Up Now → </button>
		  	</div>
		);
	}
}

export default Home_3;
