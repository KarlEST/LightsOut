import React, { Component } from 'react';
import Row from './Row';
import GameManager from './GameManager';
import './App.css';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.gameManager = new GameManager();
		this.gameManager.generateInitialField();
		this.state = {
			gameField: this.gameManager.getField(),
			isWin: false,
		};
	}

	render() {
		return (
			<div className="App">
				{this.state.gameField.map(this.renderRow)}
				{this.state.isWin ? <div className="Message">You won! Click to play again</div> : null}
			</div>
		);
	}

	renderRow = (row, y) => {
		return <Row key={y} row={row} y={y} onClick={this.handleClick} />;
	};

	handleClick = square => {
		if (this.state.isWin) {
			this.gameManager.generateInitialField();
		} else {
			this.gameManager.updateField(square);
		}

		this.setState({
			gameField: this.gameManager.getField(),
			isWin: this.gameManager.isWin(),
		});
	};
}
