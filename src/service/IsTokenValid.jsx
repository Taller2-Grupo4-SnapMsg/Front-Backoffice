import { API_URL } from "../constants";
import { headers_token } from "../constants";





const IsTokenValidHandler = async (navigate) => {

  const response = await fetch(API_URL + '/admin/is_admin', {
    method: 'GET',
    headers: headers_token,
  });


  const responseData = await response.json();

  if (response.status === 200) {
    console.log('User authenticated.');
    return;
  } else {
    // token is no longer valid, redirect to login
    console.error('Authentication failed:', responseData);
    // navigate('/admin/signin');
  }

};
  
  export default IsTokenValidHandler;
  