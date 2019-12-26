import React, { useState } from 'react';

import { Gameboard, GameStatus } from '..';
import {
  generateBoard,
  updateBoard,
  isWin,
  getInitialSolutionCountBoard,
  updateSolutionCountBoard,
  getMinimumMoves,
} from '../../utils';

import './App.css';

const App = () => {
  const [board, setBoard] = useState(() => generateBoard());
  const [solutionCountBoard, setSolutionCountBoard] = useState(() =>
    getInitialSolutionCountBoard(),
  );
  const [playerMoveCount, setPlayerMoveCount] = useState(0);
  const isWinnerWinnerChickenDinner = isWin(board);

  return (
    <div className="app">
      <h1>Close all the lights!</h1>
      <Gameboard
        board={board}
        onClick={square => {
          if (isWinnerWinnerChickenDinner) {
            setPlayerMoveCount(0);
            setBoard(generateBoard());
            setSolutionCountBoard(getInitialSolutionCountBoard());
          } else {
            setPlayerMoveCount(playerMoveCount + 1);
            setBoard(updateBoard(board, square));
            setSolutionCountBoard(updateSolutionCountBoard(solutionCountBoard, square));
          }
        }}
      />
      {isWinnerWinnerChickenDinner ? (
        <GameStatus
          playerMoves={playerMoveCount}
          minimumMoves={getMinimumMoves(solutionCountBoard)}
        />
      ) : null}
    </div>
  );
};

export default App;
