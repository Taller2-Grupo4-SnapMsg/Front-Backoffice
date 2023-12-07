import { SNAPMSG_URL } from '../constants.js';
import { headers_token } from '../constants.js';
import { PAGE_SIZE } from '../constants.js';

const FetchUserSnapMsg = async (email, page) => {
    try {
        const offset = (page - 1) * PAGE_SIZE;
        const response = await fetch(`${SNAPMSG_URL}/posts/admin/user/?email=${encodeURIComponent(email)}&start=${offset}&ammout=${PAGE_SIZE}`, {
            method: 'GET',
            headers: headers_token,
            });
        let data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching user: ', error);
        throw new Error('Failed to fetch ' + email);
      }
};

export default FetchUserSnapMsg;