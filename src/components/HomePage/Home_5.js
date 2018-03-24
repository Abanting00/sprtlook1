import React, { Component } from 'react';
import '../../styles/HomePage/home5.css';
import image from '../../images/pc-screen@2x.png';

class Home_5 extends Component {
  	render() {
    	return(
		  	<div className="home-5-container">
		    	<h1> Share your highlight video with coaches. </h1>
		    	<h3> Dont have one? We'll help you make one </h3>
		    	<img src = {image} />
		  	</div>
		);
	}
}

export default Home_5;
