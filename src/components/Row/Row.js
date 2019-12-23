import React from 'react';
import Types from 'prop-types';

import { Square } from '..';

import './Row.css';

const Row = ({ row, onClick }) => (
  <div className="row">
    {row.map((square, x) => (
      // eslint-disable-next-line react/no-array-index-key
      <Square key={x} square={square} onClick={() => onClick({ x })} />
    ))}
  </div>
);

Row.propTypes = {
  row: Types.arrayOf(Types.number).isRequired,
  onClick: Types.func.isRequired,
};

export default Row;
