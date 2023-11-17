import { API_URL, headers_token, PAGE_SIZE } from "../constants";

const GetUsersHandler = async (query, pageNumber) => {
  try {
    const offset = (pageNumber - 1) * PAGE_SIZE;
    let url;

    if (query === "") {
      url = `${API_URL}/users?start=${offset}&ammout=${PAGE_SIZE}`;
    } else {
      url = `${API_URL}/users/${query}?start=${offset}&ammout=${PAGE_SIZE}`;
    }

    const response = await fetch(url, {
      method: 'GET',
      headers: headers_token,
    });

    const responseData = await response.json();
    return responseData; // Return the entire response data
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
};

export default GetUsersHandler;
