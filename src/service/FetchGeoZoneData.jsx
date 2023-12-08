import { headers_token, encodeTimestampForURL, API_URL  } from '../constants.js';

const FetchGeoZoneData = async (x, timestamp_end) => {
  try {
    const timestamp_end_url = encodeTimestampForURL(timestamp_end);
      let url = `${API_URL}/geozones/amount?timestamp_end=${timestamp_end_url}`;
      if (x) {
        const params = new URLSearchParams();
        params.append('x', x);
        
        url = `${url}&${params.toString()}`;
      }

      const response = await fetch(url, {
          method: 'GET',
          headers: headers_token,
          });
      const responseData = await response.json();
      const data = responseData.map(item => ({
        country: item._id,
        amount_users: item.amount_users
      })).sort((a, b) => b.amount_users - a.amount_users);
      return data;
    } catch (error) {
      console.error('Error fetching user: ', error);
    }
};

export default FetchGeoZoneData;