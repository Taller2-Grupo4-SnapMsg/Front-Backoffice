import { METRICS_URL } from '../constants.js';
import { headers_token } from '../constants.js';

const FetchRegistrationData = async (timestamp_begin, timestamp_end) => {
  try {
      const url = `${METRICS_URL}/registration/amount?timestamp_begin=${timestamp_begin}&timestamp_end=${timestamp_end}`;
      
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

export default FetchRegistrationData;