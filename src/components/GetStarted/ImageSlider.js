import React, { Component } from 'react';
import './GetStarted.css';
import image1 from './img1.PNG';
import image2 from './img2.PNG';
import image3 from './img3.png';


class ImageSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slideCount: 1,
			image: image1
		};
		this.handleClick = this.handleClick.bind(this);
		this.slideChange = this.slideChange.bind(this);
		this.updateImage = this.updateImage.bind(this);
	}
	
	handleClick(e) {
		this.setState({
			slideCount: e.target.value
		}, this.updateImage)
	}

	updateImage() {
		if (this.state.slideCount == 1) {
			this.setState({
				image: image1
			})
		} 
		else if (this.state.slideCount == 2) {
			this.setState({
				image: image2
			})
		} else {
			this.setState({
				image:image3
			})
		}
	}

	slideChange() {
		this.setState({
			slideCount: (this.state.slideCount < 3 ? this.state.slideCount + 1 : 1)
		}, this.updateImage);
		console.log(this.state.slideCount)
	}

	componentDidMount() {
		setInterval(this.slideChange, 5000);
	}

	render() {
		const background = {
			backgroundImage: "url("+this.state.image+")",
		}
		const button = {
			'background-color': '#4A90E2',
			'border-color': '#4A90E2'
		}
		return (
			<div className="ImageSlider" style={background}>
				<div className="ImageButtons">
					{ this.state.slideCount == 1 ? 
						(<button value="1" onClick={this.handleClick} style={button}></button>) :
						(<button value="1" onClick={this.handleClick}></button>)
					}
					{ this.state.slideCount == 2 ? 
						(<button value="2" onClick={this.handleClick} style={button}></button>) :
						(<button value="2" onClick={this.handleClick}></button>)
					}
					{ this.state.slideCount == 3 ? 
						(<button value="3" onClick={this.handleClick} style={button}></button>) :
						(<button value="3" onClick={this.handleClick}></button>)
					}
				</div>
			</div>
		);
	}
}

export default ImageSlider;