import * as React from 'react';
import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/" sx = {{
          color: "#6B5A8E",
          '&:hover': {
            color: "#947EB0",
          }
      }}>
        SnapMsg
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#353839', //In theory the rest are calculated from here.
      light: '#F5EBFF',
    },
    mode: 'dark',
  }
});

export default function PasswordRecovery() {
  const [new_password, setNewPassword] = useState('');
  const [confirmed_password, setConfirmedPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (new_password != confirmed_password) {
        setError('Passwords are not equal.');
        return; // Prevent form submission
      }

    // Clear any previous error messages
    setError('');

    // Now you can send email and password to the backend.
    console.log({
      email: email,
      password: password,
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar alt="logo" src="/small_logo.png" sx={{ m: 1, width: 56, height: 56}} />
          <Typography component="h1" variant="h5">
            Enter the new password
          </Typography>

          <IconButton
                onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                edge="end"
                aria-label="toggle password visibility"
                sx={{
                    display: 'flex',
                    alignItems: 'center', // Center vertically within the IconButton
                  }}
                >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="new_password"
              label="New Password"
              name="new_password"
              type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
              autoComplete="New Password"
              autoFocus
              value={new_password}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="confirmed_password"
              label="Confirm New Password"
              name="confirmed_password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="Confirm New Password"
              autoFocus
              value={confirmed_password}
              onChange={(e) => setConfirmedPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, 
                backgroundColor: "#947EB0",
                '&:hover': {
                  backgroundColor: "#6B5A8E",
                  }
                }}
            >
              Change Password
            </Button>
             {/* Display error message */}
             {error && (
                    <Typography variant="body2" color="error" align="center">
                    {error}
                    </Typography>
                )}
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}