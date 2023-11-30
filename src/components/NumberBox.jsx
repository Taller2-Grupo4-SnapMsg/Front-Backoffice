import React from 'react';
import PropTypes from 'prop-types';
import { GREY } from '../constants';

const NumberBox = ({ number, borderColor, unit, style }) => {
  const boxStyle = {
    width: '5vw',
    height: '5vw',
    backgroundColor: GREY,
    border: `4px solid ${borderColor}`,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1vw',
    fontWeight: 'bold',
    ...style,
  };

  return (
    <div style={boxStyle}>
      {number} {unit}
    </div>
  );
};

NumberBox.propTypes = {
  number: PropTypes.number.isRequired,
  borderColor: PropTypes.string.isRequired,
};

export default NumberBox;
