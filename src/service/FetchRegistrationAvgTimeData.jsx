import { METRICS_URL } from '../constants.js';
import { headers_token } from '../constants.js';

const FetchRegistrationAvgTimeData = async (timestamp_begin, timestamp_end) => {
  try {
      const url = `${METRICS_URL}/registration/average_time?timestamp_begin=${timestamp_begin}&timestamp_end=${timestamp_end}`;
      
      const response = await fetch(url, {
          method: 'GET',
          headers: headers_token,
          });
      const data = await response.json();
      const roundedData = {
        average_time: parseFloat(data.average_time).toFixed(2),
      };
      return roundedData;
    } catch (error) {
      console.error('Error fetching user: ', error);
    }
};

export default FetchRegistrationAvgTimeData;