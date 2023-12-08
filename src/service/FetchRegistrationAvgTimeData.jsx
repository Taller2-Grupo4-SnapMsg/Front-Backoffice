import { headers_token, encodeTimestampForURL, API_URL  } from '../constants.js';

const FetchRegistrationAvgTimeData = async (timestamp_begin, timestamp_end) => {
  try {
      const timestamp_begin_url = encodeTimestampForURL(timestamp_begin);
      const timestamp_end_url = encodeTimestampForURL(timestamp_end);
      const url = `${API_URL}/registration/average_time?timestamp_begin=${timestamp_begin_url}&timestamp_end=${timestamp_end_url}`;
      
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