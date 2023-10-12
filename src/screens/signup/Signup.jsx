import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { Alert } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RegisterHandler from '../../service/Register';
import CircularProgress from '@mui/material/CircularProgress';



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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [nickname, setNickname] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [fillFieldsAlert, setFillFieldsAlert] = useState(false);
  const [unexpectedErrorAlert, setUnexpectedErrorAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token')

  // If we have no token, redirect to signin
  // TODO: Get an endpoint on the backend that checks if the token is an admin token.
  React.useEffect(() => {
    if (!token) navigate('/admin/signin');
  })
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if any field is empty
    if (!email || !password || !firstName || !lastName || !nickname || !selectedDate) {
      setError('Please fill out all fields.');
      setFillFieldsAlert(true);
      return; // Prevent form submission
    }
    // Clear previous error
    setError('');
    const data = new FormData(event.currentTarget);
    RegisterHandler(navigate, 
                    data.get('email'), 
                    data.get('password'), 
                    data.get('firstName'), 
                    data.get('lastName'), 
                    data.get('username'),
                    selectedDate,
                    setLoading,
                    setUnexpectedErrorAlert);
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
          Create a new admin
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
                  onChange={(e) => setFirstName(e.target.value)}
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
                  onChange={(e) => setLastName(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    sx = {{
                      "& label.Mui-focused": {
                        color: "#A995C9"
                      }
                    }}
                    onChange={(e) => setNickname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
                  <DatePicker
                    id = "birthday"
                    label="Birthday*"
                    value={selectedDate}
                    onChange={(newValue) => {setSelectedDate(newValue);}}
                    textField={(params) => <TextField {...params} />}
                    maxDate={dayjs(new Date())}
                    sx = {{
                      "& label.Mui-focused": {
                        color: "#A995C9"
                      },
                      "width": "100%"
                    }}
                  />
                </LocalizationProvider>
                </Grid>
            </Grid>
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
                  Create a new admin
              </Button>
              )}
          </Box>
        </Box>
        {fillFieldsAlert && <Alert severity="error" onClose = {() => setFillFieldsAlert(false)}>
            Please, fill out all fields!
          </Alert>}
        {unexpectedErrorAlert && <Alert severity="error" onClose = {() => setUnexpectedErrorAlert(false)}>
            Unexpected error. Please try again later.
          </Alert>}
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}