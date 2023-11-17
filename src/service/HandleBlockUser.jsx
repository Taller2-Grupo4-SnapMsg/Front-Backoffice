import { API_URL } from '../constants';
import { headers_token } from '../constants';
/**
 * curl -X 'PUT' \
  'https://gateway-api-service-merok23.cloud.okteto.net/users/block/juan%40gmail.com?blocked=false' \
  -H 'accept: application/json' \
  -H 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDAzMjg4MTAsInN1YiI6ImFkbWluQGdtYWlsLmNvbSJ9.RSwL1OiLsHgrsK9yl1ArEOVUiXyTlZKix6414Qofwvw'
 */
export default function HandleBlockUser (setLoading, email, block) {
    try {
        setLoading(true);
        console.log(email)
        const response = fetch(`${API_URL}/users/block/${encodeURIComponent(email)}?blocked=${block}`, {
            method: 'PUT',
            headers: headers_token,
        });
        if (!response.ok) {
            throw new Error(response.detail);
        }
        setLoading(false);
        return;
    } catch (error) {
        console.error('Error blocking user: ', error);
        throw new Error('Failed to block ' + email);
    }
};

