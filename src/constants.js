import { createTheme } from '@mui/material/styles';

export const API_URL = 'https://gateway-api-service-merok23.cloud.okteto.net';
export const SNAPMSG_URL = 'https://postsback.onrender.com';

export const headers = {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  };
export const headers_token = {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'token': localStorage.getItem('token'),
};    

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#353839', //In theory the rest are calculated from here.
      light: '#F5EBFF',
    },
    mode: 'dark',
  }
});