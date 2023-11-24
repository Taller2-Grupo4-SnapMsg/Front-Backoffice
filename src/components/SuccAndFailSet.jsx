import React from 'react';
import PropTypes from 'prop-types';
import NumberBox from './NumberBox';
import { defaultTheme } from '../constants';
import { ThemeProvider } from '@mui/material/styles';

const SuccAndFailSet = ({ title, number1, number2, borderColor1, borderColor2 }) => {
    const containerStyle = {
        textAlign: 'center',
        margin: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column', // Display items in a column
      };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    marginRight: '10px',
    color: '#A995C9',
  };

  const boxesContainerStyle = {
    display: 'flex', // Use flexbox for the boxes container
    justifyContent: 'center', // Center items horizontally
  };

  const boxMargin = {
    marginRight: '30px', // Adjust the margin as needed
  };

  return (
    <ThemeProvider theme={defaultTheme}>
    <div style={containerStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={boxesContainerStyle}>
      <NumberBox number={number1} borderColor={borderColor1} />
      <NumberBox number={number2} borderColor={borderColor2} />
      </div>
    </div>
    </ThemeProvider>
  );
};

SuccAndFailSet.propTypes = {
  title: PropTypes.string.isRequired,
  number1: PropTypes.number.isRequired,
  number2: PropTypes.number.isRequired,
  borderColor1: PropTypes.string.isRequired,
  borderColor2: PropTypes.string.isRequired,
};

export default SuccAndFailSet;