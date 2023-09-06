import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SmallLogo from '/small_logo.png';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';



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

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
              />
              <TextField
                margin="normal"
                required
                fullWidth
                sx = {{ 
                    "& label.Mui-focused": {
                      color: "#A995C9"
                    }
                  }}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={
                    <Checkbox
                    value="remember"
                    color="default"
                    />
                }
                label="Remember me"
                sx={{
                    '& .Mui-checked': {
                    color: 'white', // Change the color when checked
                    },
                }}

                
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
                Sign In
            </Button>
                <Grid container justifyContent="space-between">
                <Grid item>
                    <Link href="/signin" variant="body2" sx={{
                    color: "#6B5A8E",
                    '&:hover': {
                        color: "#947EB0",
                    }
                    }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                <Link href="/signin" variant="body2" sx={{
                    color: "#6B5A8E",
                    '&:hover': {
                        color: "#947EB0",
                    }
                    }}>
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}