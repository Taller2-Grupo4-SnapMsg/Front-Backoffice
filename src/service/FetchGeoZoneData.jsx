import { METRICS_URL } from '../constants.js';
import { headers_token } from '../constants.js';

const FetchGeoZoneData = async () => {
  try {
      const url = `${METRICS_URL}geozones/amount`
      
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