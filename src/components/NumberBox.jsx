import React from 'react';
import PropTypes from 'prop-types';

const GREY = '#3e393f';

const NumberBox = ({ number, borderColor, style }) => {
  const boxStyle = {
    width: '100px', // Adjust the width as needed
    height: '100px', // Adjust the height as needed
    backgroundColor: GREY, // Light gray background color
    border: `4px solid ${borderColor}`, // Border color based on the parameter
    borderRadius: '8px', // Adjust the border radius as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px', // Adjust the font size as needed
    fontWeight: 'bold',
    ...style,
  };

  return (
    <div style={boxStyle}>
      {number}
    </div>
  );
};

NumberBox.propTypes = {
  number: PropTypes.number.isRequired,
  borderColor: PropTypes.string.isRequired,
};

export default NumberBox;
