import React, { Component } from 'react';

class ColorForm extends Component {

	constructor() {
		super();

		this.state = {
			name: '',
			foreground: '',
			background: '',
		};
	}

	clearForm = () => {
		this.setState({
			name: '',
			foreground: '',
			background: '',
		});
	}

	updateName = (event) => {
		this.setState({
			name: event.target.value
		});
	}

	updateForeground = (event) => {
		this.setState({
			foreground: event.target.value
		});
	}

	updateBackground = (event) => {
		this.setState({
			background: event.target.value
		});
	}

	updateState = (event, piece) => {
		const blank = {};

		blank[piece] = event.target.value;

		this.setState(blank);
	}

	render() {
		const { name, foreground, background } = this.state;
		return (
			<form onSubmit={ (event) => { this.props.addColor(event, name, foreground, background ); this.clearForm() }}>
				<div className="input-group">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={ this.state.name }
						onChange={ (event) => this.updateState(event, 'name') }
						required
					/>
				</div>
				<div className="input-group">
					<label htmlFor="hex">Foreground: </label>
					<input 
						type="text" 
						id="hex" 
						pattern="[a-fA-F\d]+"
						name="hex" 
						value={ this.state.foreground } 
						onChange={ (event) => this.updateState(event, 'foreground') }
						required
					/>
				</div>
				<div className="input-group">
					<label htmlFor="hex">Background: </label>
					<input 
						type="text" 
						id="hex" 
						pattern="[a-fA-F\d]+"
						name="hex" 
						value={ this.state.background } 
						onChange={ (event) => this.updateState(event, 'background') }
						required
					/>
				</div>
				<input type="submit" value="Add this color combo"/>
			</form>	
		);
	}
}

export default ColorForm;