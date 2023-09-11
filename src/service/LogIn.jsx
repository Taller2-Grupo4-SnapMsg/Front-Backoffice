const headers = {
  'Content-Type': 'application/json;charset=utf-8',
  'Access-Control-Allow-Origin': '*',
};
  
const LogInHandler = async (email, password) => {
  try {
    const requestBody = {
      email: email,
      password: password,
    };

    const response = await fetch('https://loginback-lg51.onrender.com/login/', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestBody),
    });

    if (response.status === 200) {
      // Registration successful
      console.log('Sign in successful');
      // Redirect or perform any other action you need here
      //window.location.href = '/pin';
    } else {
      // Registration failed
      const responseData = await response.json();
      console.error('Sign in failed:', responseData);
    }

    return response.json();
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
