import { API_URL } from "../constants";

const headers = {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'token': localStorage.getItem('token'),
};

const GetUsersHandler = async (navigate) => {
    try {
      const response = await fetch(API_URL + '/users', {
        method: 'GET',
        headers: headers,
      });
  
      if (!response.ok) {
        navigate('/admin/signin');
        throw new Error(response.detail);
      }
  
      const responseData = await response.json();
      return responseData; // Return the entire response data
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Failed to fetch users');
    }
  };
  
  export default GetUsersHandler;
  