import PropTypes from 'prop-types';
import React, { Component } from 'react';
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
		return <div className={name} onClick={this.handleClick} />;
	}

	handleClick = () => {
		this.props.onClick({
			squareValue: this.props.square,
			x: this.props.x,
			y: this.props.y,
		});
	};
}
