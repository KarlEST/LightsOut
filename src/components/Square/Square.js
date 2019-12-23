import Types from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import './Square.css';

const Square = ({ square, onClick }) => (
  <div
    className={classNames('square', { lighted: square })}
    onClick={onClick}
    onKeyPress={() => {}}
    role="checkbox"
    aria-label="square"
    aria-checked={!!square}
    tabIndex="0"
  />
);

Square.propTypes = {
  square: Types.number.isRequired,
  onClick: Types.func.isRequired,
};

export default Square;
