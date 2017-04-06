import React, { Component, PropTypes } from 'react';
import './Square.css';

export default class Square extends Component {
	static propTypes = {
		square: PropTypes.number.isRequired,
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
		onClick: PropTypes.func.isRequired,
	};

	render() {
		const name = this.props.square ? 'square lighted' : 'square';
		return (
			<div className={name} onClick={this.handleClick}>
				{this.props.square}
			</div>
		);
	}

	handleClick = () => {
		this.props.onClick( this.props.square, this.props.x, this.props.y);
	}

}
