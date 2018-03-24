import React, { Component }  from 'react';


export function imageOne(props) {
	let background = {
		backgroundImage: 'url(img1.PNG)',
		backgroundPosition: 'center'
	}
	return (
		<div 
			className="slide" 
			style={background}>
		<h1>Hello</h1>
		</div>
	)
}

export function imageTwo(props) {
	let background = {
		backgroundImage: 'url(img2.PNG)',
		backgroundPosition: 'center'
	}
	return (
		<div 
			className="slide" 
			style={background}>
		</div>
	)
}

export function imageThree(props) {
	let background = {
		backgroundImage: 'url(img1.PNG)',
		backgroundPosition: 'center'
	}
	return (
		<div 
			className="slide" 
			style={background}>
		</div>
	)
}