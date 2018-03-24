import React, { Component } from 'react';
import { imageOne, imageTwo, imageThree } from './Images.js';
import './GetStarted.css';


// class ImageSlider extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			slideCount: 1
// 		};
// 	}

// 	render() {
// 		return (
// 			<div className="ImageSlider">
// 				{ this.state.slideCount === 1 ? <imageOne /> : null }
// 				{ this.state.slideCount === 2 ? <imageTwo /> : null }
// 				{ this.state.slideCount === 3 ? <imageThree /> : null }
// 			</div>
// 		);
// 	}
// }


class ImageSlider extends Component {
	render() {
		return (
			<div className="ImageSlider">
			</div>
		);
	}
}

export default ImageSlider;