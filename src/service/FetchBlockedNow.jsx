import { METRICS_URL, headers_token } from '../constants.js';

const FetchBlockedNow = async () => {
  try {
      const url = `${METRICS_URL}/block/blocked_now`;
      
      const response = await fetch(url, {
          method: 'GET',
          headers: headers_token,
          });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user: ', error);
    }
};

export default FetchBlockedNow;