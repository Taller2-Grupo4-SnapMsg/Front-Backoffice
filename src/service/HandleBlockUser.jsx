import { API_URL } from '../constants';
import { headers_token } from '../constants';

export default async function HandleBlockUser (setLoading, email, block) {
    try {
        setLoading(true);
        const response = await fetch(`${API_URL}/users/block/${encodeURIComponent(email)}?blocked=${block}`, {
            method: 'PUT',
            headers: headers_token,
        });
        if (response.status !== 200) {
            throw new Error(response.detail);
        }
        setLoading(false);
        return;
    } catch (error) {
        console.error('Error blocking user: ', error.message);
        throw new Error('Failed to block ' + email);
    }
};

