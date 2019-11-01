import React, { Component } from 'react';
import { Row } from '..';
import GameManager from '../../GameManager';
import './Gameboard.css';

export default class Gameboard extends Component {
  constructor(props) {
    super(props);

    this.gameManager = new GameManager();
    this.gameManager.generateInitialField();
    this.state = {
      gameField: this.gameManager.getField(),
      isWin: false,
    };
  }

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

  render() {
    const { gameField, isWin } = this.state;

    return (
      <div className="gameboard">
        {gameField.map((row, y) => (
          // eslint-disable-next-line react/no-array-index-key
          <Row key={y} row={row} y={y} onClick={this.handleClick} />
        ))}
        {isWin ? <div className="message">You won! Click to play again</div> : null}
      </div>
    );
  }
}
