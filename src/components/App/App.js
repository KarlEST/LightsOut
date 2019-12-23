import React, { useState } from 'react';

import { Gameboard, GameStatus } from '..';
import { generateBoard, updateBoard, isWin } from '../../utils';
import './App.css';

const App = () => {
  const [board, setBoard] = useState(() => generateBoard());
  const isWinnerWinnerChickenDinner = isWin(board);

  return (
    <div className="app">
      <h1>Close all the lights!</h1>
      <Gameboard
        board={board}
        onClick={square => {
          if (isWinnerWinnerChickenDinner) {
            setBoard(generateBoard());
          } else {
            setBoard(updateBoard(board, square));
          }
        }}
      />
      {isWinnerWinnerChickenDinner ? <GameStatus /> : null}
    </div>
  );
};

export default App;
