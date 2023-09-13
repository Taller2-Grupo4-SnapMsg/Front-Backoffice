import * as React from 'react';
import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RegisterHandler from '../../service/Register';



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

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("The button has been pressed")
    RegisterHandler(data.get('email'), 
                    data.get('password'), 
                    data.get('firstName'), 
                    data.get('lastName'), 
                    data.get('username'));

    //window.location.href = '/pin';
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  sx = {{ 
                    "& label.Mui-focused": {
                      color: "#A995C9"
                    }
                  }}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  sx = {{ 
                    "& label.Mui-focused": {
                      color: "#A995C9"
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  color = "primary"
                  sx = {{ 
                    "& label.Mui-focused": {
                      color: "#A995C9"
                    }
                    }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  sx = {{ 
                    "& label.Mui-focused": {
                      color: "#A995C9"
                    }
                  }}
                  autoComplete="new-password"
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="username"
                    label="Displayed Nickname"
                    name="username"
                    autoComplete="username"
                    sx = {{
                      "& label.Mui-focused": {
                        color: "#A995C9"
                      }
                    }}
                  />
                </Grid>
            </Grid>
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2" sx={{
                  color: "#6B5A8E",
                  '&:hover': {
                    color: "#947EB0",
                  }
                }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}