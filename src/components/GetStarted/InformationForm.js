import React, { Component } from 'react';
import './GetStarted.css';


class InformationForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			sport: "",
			position: "",
			hometown: "",
			nationality: "",
			curr_team: "",
			curr_pos: "",
			school: "",
			class: "",
			birth: "",
			height: {
				ft: "",
				in: ""
			}
		}
	}

	render() {
		return (
			<div className="InformationForm">
				<form className="Info-Form">
					<label>
						Sport
						<br/>
						<input 
							name="sport" 
							required />
					</label>
					<label>
						Main position, Other positions
						<input 
							name="main-position" 
							required />
					</label>
					<label>
						Hometown
						<input 
							name="hometown" 
							required />
					</label>
					<label>
						Nationality
						<input 
							name="nationality" 
							required />
					</label>
					<label>
						Current Team
						<input 
							name="current-team" 
							required />
					</label>
					<label>
						Current Position
						<input 
							name="current-position" 
							required />
					</label>
					<label>
						School
						<br/>
						<input 
							name="school" 
							required />
					</label>
					<label>
						Class
						<br/>
						<input 
							name="class" 
							required />
					</label>
					<label>
						Date of birth
						<input 
							name="birth" 
							required />
					</label>
					<label>
						Height
						<br/>
						<input 
							
							className="heights"
							name="height-ft"
							placeholder="ft" 
							required />
						<input 
							className="heights"
							name="height-in"
							placeholder="in" 
							required />
					</label>
					<button id="nextButton" className="btn btn-reg">Next</button>
				</form>
			</div>
		);
	}
}

export default InformationForm;