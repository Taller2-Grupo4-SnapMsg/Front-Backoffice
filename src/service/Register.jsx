import { API_URL } from "../constants";

const headers = {
  'Content-Type': 'application/json;charset=utf-8',
  'Access-Control-Allow-Origin': '*',
};

const RegisterHandler = async (
  navigate,
  email,
  password,
  setLoading,
  setUnexpectedErrorAlert) => {
  try {
    setLoading(true);
    const requestBody = {
      email: email,
      password: password
    };

    const response = await fetch(API_URL + '/register_admin', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestBody),
    });

    const responseData = await response.json();

    if (response.status === 200) {
      // Registration successful
      const token = responseData.token
      localStorage.setItem('token', token);
      navigate('/admin/dashboard');
    } else {
      // Registration failed
      setLoading(false);
      setUnexpectedErrorAlert(true);
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

export default RegisterHandler;
