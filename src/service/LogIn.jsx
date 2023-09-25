const headers = {
  'Content-Type': 'application/json;charset=utf-8',
  'Access-Control-Allow-Origin': '*',
};
  
const LogInHandler = async (navigate, email, password) => {
  try {
    const requestBody = {
      email: email,
      password: password,
    };

    const response = await fetch('https://loginback-lg51.onrender.com/login_admin/', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestBody),
    });


    const responseData = await response.json();

    if (response.status === 200) {
      // Registration successful
      const token = responseData.token
      localStorage.setItem('token', token);
      //console.log("token saved: ", localStorage.getItem('token'));
      console.log('Sign in successful');
      
      navigate('/admin/dashboard');
    } else {
      // Registration failed
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
