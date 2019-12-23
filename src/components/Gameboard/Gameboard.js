import React from 'react';
import Types from 'prop-types';

import { Row } from '..';

const Gameboard = ({ board, onClick }) => (
  <>
    {board.map((row, y) => (
      // eslint-disable-next-line react/no-array-index-key
      <Row key={y} row={row} y={y} onClick={({ x }) => onClick({ x, y })} />
    ))}
  </>
);

Gameboard.propTypes = {
  board: Types.arrayOf(Types.arrayOf(Types.number.isRequired).isRequired).isRequired,
  onClick: Types.func.isRequired,
};

export default Gameboard;
