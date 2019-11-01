import React from 'react';
import Types from 'prop-types';

import { Square } from '..';

import './Row.css';

const Row = ({ row, onClick, y }) => (
  <div className="row">
    {row.map((square, x) => (
      // eslint-disable-next-line react/no-array-index-key
      <Square key={x + y} square={square} x={x} y={y} onClick={onClick} />
    ))}
  </div>
);

Row.propTypes = {
  row: Types.arrayOf(Types.number).isRequired,
  onClick: Types.func.isRequired,
  y: Types.number.isRequired,
};

export default Row;
