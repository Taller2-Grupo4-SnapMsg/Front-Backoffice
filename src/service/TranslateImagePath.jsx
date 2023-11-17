import { API_URL } from '../constants.js';
import { headers_token } from '../constants.js';


export const translateImage = async (image) => {
    if (image === "") {
        return "/empty_image.png";
    }
    const url = API_URL + '/users/admin/image?firebase_path=' + image;
    const response = await fetch(url, {
        method: 'GET',
        headers: headers_token,
    });
    const data = await response.json();
    return data.detail;
}
