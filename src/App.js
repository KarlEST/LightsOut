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
		if (this.state.isWin) {
			console.log('CHICKEN DINNER');
		}
		return <div className="App">{this.state.gameField.map(this.renderRow)}</div>;
	}

	renderRow = (row, y) => {
		return <Row key={y} row={row} y={y} onClick={this.handleClick} />;
	};

	handleClick = square => {
		this.gameManager.updateField(square);

		this.setState({
			gameField: this.gameManager.field,
			isWin: this.gameManager.isWin(),
		});
	};
}
