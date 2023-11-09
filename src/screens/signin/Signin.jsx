import * as React from 'react';
import { useState } from 'react';

import LogInHandler from '../../service/LogIn';


import { useNavigate } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { Alert } from '@mui/material';

import InputAdornment from '@mui/material/InputAdornment';
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

export default function SignInSide() { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // For the loading indicator
  const [fillFieldsAlert, setFillFieldsAlert] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true); // Show the loading indicator

    // Check if email and password are empty
    if (!email || !password) {
      setFillFieldsAlert(true);
      setLoading(false); // Hide the loading indicator
      return; // Prevent form submission
    }

    setFillFieldsAlert(false); // Clear any previous error messages
    // Clear any previous error messages
    setError('');

    // Now you can send email and password to the backend.
    const data = new FormData(event.currentTarget);
    LogInHandler(navigate,
                 data.get('email'), 
                 data.get('password'),
                 setLoading,
                 setInvalidCredentials,
                 setError)
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://wallpaperaccess.com/full/2923163.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar alt="logo" src="/small_logo.png" sx={{ m: 1, width: 56, height: 56}} />
            <Typography component="h1" variant="h5">
              Sign in 
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                sx = {{ 
                    "& label.Mui-focused": {
                      color: "#A995C9"
                    }
                  }}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                sx={{
                    "& label.Mui-focused": {
                    color: "#A995C9"
                    }
                }}
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label="toggle password visibility"
                        edge="end"
                        >
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                    </InputAdornment>
                    )
                }}
                />
              { loading ? (
                <Box margin="normal"
                  sx={{
                    margin: 'inherit',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CircularProgress margin = "normal" color="inherit" />
                </Box>
              ) : (
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
                  Sign In
                </Button>
              )
              }
             {/* Display error message */}
             {invalidCredentials &&
               <Alert sx={{ margin: "inherit"}} severity="error" onClose = {() => setInvalidCredentials(false)}>
                   {error}
               </Alert>
             }
             {fillFieldsAlert && 
                <Alert sx={{ margin: "inherit"}} severity="error" onClose = {() => setFillFieldsAlert(false)}>
                  Please, fill out all fields!
                </Alert>
              }
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
