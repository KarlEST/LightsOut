import React from 'react';
import Types from 'prop-types';

const GameStatus = ({ playerMoves, minimumMoves }) => {
  return (
    <div>
      <h3>You won! Press on the game board to start a new one.</h3>
      {playerMoves && minimumMoves ? (
        <p>
          You switched the lights {playerMoves} times. The game was solvable in {minimumMoves}{' '}
          moves.
        </p>
      ) : null}
    </div>
  );
};

GameStatus.propTypes = {
  playerMoves: Types.number.isRequired,
  minimumMoves: Types.number.isRequired,
};

export default GameStatus;
