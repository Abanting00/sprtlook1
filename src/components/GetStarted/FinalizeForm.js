import React, { Component } from 'react';
import './GetStarted.css';


class FinalizeForm extends Component {
	render() {
		return (
			<div className="FinalizeForm">
				<h3>Profile picture</h3>
				<form className="Final-Form">
					<div id="prof-pic">
						<img src="http://via.placeholder.com/50x50" />
						<div id="prof-pic-buttons">
							<div id="prof-pic-buttons-border">
							<button id="addPic" className="btn btn-reg">Add</button>
							<span>or</span>
							<a href="#">Use default</a>
							</div>
						</div>
					</div>
					<div className="Highlight-Video">
						Highlight Video <span id="h-video">(optional)</span>
					</div>
					<input 
						name="yt-url"
						placeholder="Paste a Youtube URL" />
					<textarea 
						id="yt-textarea"
						name="yt-description"
						placeholder="Enter a brief description" />
					<button id="finishButton" className="btn btn-reg">Finish</button>
				</form>
			</div>
		);
	}
}

export default FinalizeForm;