import React from 'react';
import './LoadingAnimation.css';
import { defaultTheme } from '../../constants';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const LoadingAnimation = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <div className="loading-container">
            <img src="/small_logo.png" alt="Logo" className="loading-logo" />
        </div>
    </ThemeProvider>
  );
};

export default LoadingAnimation;
