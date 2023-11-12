import { SNAPMSG_URL } from '../constants.js';
import { headers_token } from '../constants.js';
import { PAGE_SIZE } from '../constants.js';

const FetchSnapMsgAll = async (pageNumber) => {
    try {
        const offset = (pageNumber - 1) * PAGE_SIZE;  
        const response = await fetch(`${SNAPMSG_URL}/posts/admin?start=${offset}&ammount=${PAGE_SIZE}`, {
            method: 'GET',
            headers: headers_token,
            });
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching user: ', error);
        throw new Error('Failed to fetch ' + email);
      }
};

export default FetchSnapMsgAll;