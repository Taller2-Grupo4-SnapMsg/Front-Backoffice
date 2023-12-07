import { API_URL } from '../constants.js';
import { headers_token } from '../constants.js';
import { PAGE_SIZE } from '../constants.js';

const FetchSnapMsgAll = async (pageNumber, query) => {
  try {
      const offset = (pageNumber - 1) * PAGE_SIZE;  
      let url
      if (query === "") {
        url = `${API_URL}/posts/admin/all?start=${offset}&ammount=${PAGE_SIZE}`;
      } else {
        url = `${API_URL}/posts/admin/search/${query}?offset=${offset}&ammount=${PAGE_SIZE}`;
      }
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

export default FetchSnapMsgAll;