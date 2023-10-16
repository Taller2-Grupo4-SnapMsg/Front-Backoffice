import { API_URL } from "../constants";
const headers = {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  };
    
  const IsTokenValidHandler = async (navigate) => {
    try {
      const requestBody = {
        token: localStorage.getItem('token'),
      };
  
      const response = await fetch(API_URL + '/validate_user/', { //a pensar!
        method: 'POST', //(??)
        headers: headers,
        body: JSON.stringify(requestBody),
      });
  
  
      const responseData = await response.json();
  
      if (response.status === 200) {
        console.log('User authenticated.');
        return;
      } else {
        // Registration failed
        console.error('Authentication failed:', responseData);
        navigate('/admin/signin');
      }
    } catch (error) {
      const message =
        error.response?.data?.error ||
        error.message ||
        'Service is not available at the moment';
      console.log(message);
      throw new Error(message);
    }
  };
  
  export default IsTokenValidHandler;
  