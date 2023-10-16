import { API_URL } from "../constants";

const headers = {
  'Content-Type': 'application/json;charset=utf-8',
  'Access-Control-Allow-Origin': '*',
};

const RegisterHandler = async (
  navigate,
  email,
  password,
  firstName,
  lastName,
  nickname,
  birthday,
  setLoading,
  setUnexpectedErrorAlert) => {
  try {
    setLoading(true);
    const birthdayDate = new Date(birthday);
    const year = birthdayDate.getFullYear(); // Get full year
    const month = birthdayDate.getMonth() + 1; // Get month (0-based, so add 1)
    const day = birthdayDate.getDate(); // Get day of the month
    
    const formattedBirthday = `${year} ${month} ${day}`;
    const requestBody = {
      email: email,
      password: password,
      name: firstName,
      last_name: lastName,
      username: nickname,
      date_of_birth: formattedBirthday,
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
      console.log('Sign up successful');
      
      navigate('/admin/dashboard');
    } else {
      // Registration failed
      console.error('Registration failed:', responseData);
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
