import React, { Component } from 'react';
import { getRandomColor } from './randomColorGenerator.js';
import Child from './Child';

class Parent extends Component {
	constructor() {
		super();
		this.state = {
			color: getRandomColor(),
			childrenColor: '#FFF'
		};
	}

	changeColor = childColor => {
		this.setState({
			color: getRandomColor(),
			childrenColor: childColor
		});
	};

	render() {
		return (
			<div className='parent' style={{ backgroundColor: this.state.color }}>
				<Child
					color={this.state.childrenColor}
					handleChangeColor={this.changeColor}
				/>
				<Child
					color={this.state.childrenColor}
					handleChangeColor={this.changeColor}
				/>
			</div>
		);
	}
}

export default Parent;
