import { METRICS_URL } from '../constants.js';
import { headers_token } from '../constants.js';

const FetchGeoZoneData = async (x, timestamp_begin, timestamp_end) => {
  try {
      let url = `${METRICS_URL}/geozones/amount?timestamp_begin=${timestamp_begin}&timestamp_end=${timestamp_end}`;
      if (x) {
        const params = new URLSearchParams();
        params.append('x', x);
        
        url = `${url}${params.toString()}`;
      }
      const response = await fetch(url, {
          method: 'GET',
          headers: headers_token,
          });
      const responseData = await response.json();
      const data = responseData.map(item => ({
        country: item._id,
        amount_users: item.amount_users
      })).sort((a, b) => a.country.localeCompare(b.country));;
      return data;
    } catch (error) {
      console.error('Error fetching user: ', error);
    }
};

export default FetchGeoZoneData;