import React, { Component, PropTypes } from 'react';
import Square from './Square';
import './Row.css';

export default class Row extends Component {
	static propTypes = {
		row: PropTypes.array.isRequired,
		onClick: PropTypes.func.isRequired,
		y: PropTypes.number.isRequired,
	};

	render() {
		return <div className="row">{this.props.row.map(this.renderSquare)}</div>;
	}

	renderSquare = (square, x) => {
		return <Square key={x + this.props.y} square={square} x={x} y={this.props.y} onClick={this.props.onClick} />;
	};
}
