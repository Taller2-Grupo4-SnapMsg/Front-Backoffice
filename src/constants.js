export const API_URL = 'https://gateway-api-service-merok23.cloud.okteto.net';
export const headers = {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  };
export const headers_token = {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'token': localStorage.getItem('token'),
};    