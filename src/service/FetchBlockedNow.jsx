import { headers_token, API_URL  } from '../constants.js';

const FetchBlockedNow = async () => {
  try {
      const url = `${API_URL}/block/blocked_now`;
      
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