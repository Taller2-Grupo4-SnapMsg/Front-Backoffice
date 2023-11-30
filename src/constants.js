import { createTheme } from '@mui/material/styles';

export const API_URL = 'https://gateway-api-service-merok23.cloud.okteto.net';
export const SNAPMSG_URL = 'https://postsback.onrender.com';
export const METRICS_URL = 'https://snapmsgs-metrics.onrender.com';

export const PAGE_SIZE = 10;
export const GREY = '#3e393f';
export const RED = '#AD3435';
export const GREEN = '#6DA34D';

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

export const titleStyle = {
  color: '#947eb0',
  fontSize: '24px',
  fontWeight: 'bold',
};

export const encodeTimestampForURL = (datetime_timestamp) => {
  // Encode the datetime timestamp to make it URL-safe in an iso format
  const isoTimestamp = datetime_timestamp.toISOString()
  const encodedTimestamp = encodeURIComponent(isoTimestamp);
  return encodedTimestamp;
}
