import axios from "axios";
const headers = {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
  };

const RegisterHandler = async (email, password, firstName, lastName, nickname) => {
  try {    
    const requestBody = {
      email: email,
      password: password,
      name: firstName,
      last_name: lastName,
      nickname: nickname,
    };
    console.log(requestBody);
    console.log(requestBody.email);
    const res = await axios.post(
        'https://loginback-lg51.onrender.com/register/',
        requestBody,
        { headers }
        );
    return res.data;
  } catch (error) {
    const message =
      error.response?.data?.error ||
      error.message ||
      "Service is not available at the moment";
    console.log(message);
    throw new Error(message);
  }
};

export default RegisterHandler;