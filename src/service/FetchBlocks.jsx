import { METRICS_URL, headers_token, encodeTimestampForURL } from '../constants.js';

const FetchBlocks = async (timestamp_end, blocked) => {
  try {
      const timestamp_end_url = encodeTimestampForURL(timestamp_end);
      const url = `${METRICS_URL}/block?timestamp_end=${timestamp_end_url}`;
      
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

export default FetchBlocks;