import React, { Component } from 'react';
import '../../styles/about.css';

class About extends Component {
	constructor(props) {
		super(props);

		this.state = {
			position: this.props.data.position,
			class: this.props.data.class,
			hometown: this.props.data.hometown,
			born: this.props.data.born,
			height: this.props.data.height,
			nationality: this.props.data.nationality
		}
	}

	render() {
		return (
			<div>
				<ul id="about">
					<li className="title title1">Position</li>
					<li className="title title2">Class</li>
					<li className="title title3">Hometown</li>
					<li className="title title4">Born</li>
					<li className="title title5">Height</li>
					<li className="title title6">Nationality</li>
					<li className="data1">{this.state.position}</li>
					<li className="data2">{this.state.class}</li>
					<li className="data3">{this.state.hometown}</li>
					<li className="data4">{this.state.born}</li>
					<li className="data5">{this.state.height}</li>
					<li className="data6">{this.state.nationality}</li>
				</ul>
			</div>
		);
	}
}

export default About;