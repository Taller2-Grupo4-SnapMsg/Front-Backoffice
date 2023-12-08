import { API_URL } from '../constants';
import { headers } from '../constants';
  
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
    setLoading(false)
    setInvalidCredentials(true)
    setError("Invalid Credentials.")
    const message =
      error.response?.data?.error ||
      error.message ||
      'Service is not available at the moment';
    console.log(message);
    throw new Error(message);
  }
};

export default LogInHandler;
