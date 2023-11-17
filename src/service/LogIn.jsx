import { API_URL } from '../constants';
const headers = {
  'Content-Type': 'application/json;charset=utf-8',
  'Access-Control-Allow-Origin': '*',
};
  
const OK = 200
const USER_NOT_FOUND = 404
const PASSWORD_DOES_NOT_MATCH = 401
const NOT_ADMIN = 400

const LogInHandler = async (navigate, email, password, setLoading, setInvalidCredentials, setError) => {
  try {
    setInvalidCredentials(false)
    
    const requestBody = {
      email: email,
      password: password,
    };

    const response = await fetch(API_URL + '/login_admin', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestBody),
    });


    const responseData = await response.json();

    if (response.status === 200) {
      // Registration successful
      const token = responseData.token
      if (token !== undefined) {
        localStorage.setItem('token', token);
      }//console.log("token saved: ", localStorage.getItem('token'));
      console.log('Sign in successful');
      
      navigate('/admin/dashboard');
    } else {
      // Registration failed
      setLoading(false)
      setInvalidCredentials(true)
      setError(responseData.detail)
      console.error('Sign in failed:', responseData);
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

export default LogInHandler;
