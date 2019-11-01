import Types from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import './Square.css';

const Square = ({ square, x, y, onClick }) => (
  <div
    className={classNames('square', { lighted: square })}
    onClick={() => onClick({ squareValue: square, x, y })}
    onKeyPress={() => {}}
    role="checkbox"
    aria-label="square"
    aria-checked={!!square}
    tabIndex="0"
  />
);

Square.propTypes = {
  square: Types.number.isRequired,
  x: Types.number.isRequired,
  y: Types.number.isRequired,
  onClick: Types.func.isRequired,
};

export default Square;
