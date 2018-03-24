import React, { Component } from 'react';
import FinalizeForm from './FinalizeForm.js';
import ImageSlider from './ImageSlider.js';
import InformationForm from './InformationForm.js';
import './GetStarted.css';


const formSelection = {
	color: 'black',
	'border-bottom': '2px solid #84BDFF'
}


class GetStarted extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentForm: 'information'
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		if (this.state.currentForm == 'information') {
			this.setState({
				currentForm: 'finalize'
			})
		} else {
			this.setState({
				currentForm: 'information'
			})
		}
	}

	render() {
		return (
			<div className="GetStarted">
				<h1>Get Started</h1>
				<div className="GetStarted-Container">
					<div className="GetStarted-ImageSlider">
						<ImageSlider />
					</div>
					<div className="GetStarted-Forms">
						{ this.state.currentForm === 'information' && (
							<div className="GetStarted-FormSelector">
								<a style={formSelection}>Information</a>
								<a onClick={this.handleClick}>Finalize</a>
							</div>
						)}
						{ this.state.currentForm === 'finalize' && (
							<div className="GetStarted-FormSelector">
								<a onClick={this.handleClick}>Information</a>
								<a style={formSelection}>Finalize</a>
							</div>
						)}
						{ this.state.currentForm === 'information' && (<InformationForm />)}
						{ this.state.currentForm === 'finalize' && (<FinalizeForm />)}
					</div>
				</div>
			</div>
		);
	}
}

export default GetStarted;