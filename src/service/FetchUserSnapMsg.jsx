import { SNAPMSG_URL } from '../constants.js';
import { headers_token } from '../constants.js';

const FetchUserSnapMsg = async (email) => {
    try {
      const response = await fetch(`${SNAPMSG_URL}/posts/admin/user/?email=${encodeURIComponent(email)}`, {
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

export default FetchUserSnapMsg;