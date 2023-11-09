import { API_URL } from '../constants.js';
import { headers_token } from '../constants.js';
import { useNavigate } from 'react-router-dom';

const FetchUser = async (email, setLoading, setUser) => {
    try {
        const response = await fetch(`${API_URL}/users/find?email=${encodeURIComponent(email)}`, {
            method: 'GET',
            headers: headers_token,
            });
        if (!response.ok) {
            useNavigate('/admin/dashboard');
            throw new Error(response.detail);
        }
        setLoading(false);
        const responseData = await response.json();
        setUser(responseData);
        return;

      } catch (error) {
        console.error('Error fetching user: ', error);
        throw new Error('Failed to fetch ' + email);
      }
};

export default FetchUser;