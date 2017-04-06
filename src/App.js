import React, { Component } from 'react';
import Row from './Row';
import './App.css';

export default class App extends Component {

	state = {
		gameState: [
			[0, 1, 0, 0, 0],
			[0, 0, 1, 1, 0],
			[1, 1, 0, 0, 1],
			[1, 0, 0, 0, 0],
			[0, 0, 1, 1, 1],
		]
	};

	render() {
		return (
			<div className="App">
				{this.state.gameState.map(this.renderRow)}
			</div>
		);
	}

	renderRow = (row, y) => {
		return (
			<Row key={y} row={row} y={y} onClick={this.handleClick}/>
		);
	};

	handleClick = (squareValue, x, y) => {
		let newGameState = this.state.gameState;
		newGameState[y][x] = squareValue ? 0 : 1;

		if (x > 0) {
			newGameState[y][x - 1] = newGameState[y][x - 1] ? 0 : 1;
		}
		if (x < newGameState[y].length - 1) {
			newGameState[y][x + 1] = newGameState[y][x + 1] ? 0 : 1;
		}
		if (y > 0) {
			newGameState[y - 1][x] = newGameState[y - 1][x] ? 0 : 1;
		}
		if (y < newGameState.length - 1) {
			newGameState[y + 1][x] = newGameState[y + 1][x] ? 0 : 1;
		}
		this.setState({ gameState: newGameState });
	}
}
