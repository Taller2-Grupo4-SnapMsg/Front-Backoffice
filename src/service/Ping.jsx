import axios from "axios";
const headers = {
  'Content-Type': 'application/json;charset=utf-8',
  'Access-Control-Allow-Origin': '*',
};

const pingHandler = async (_) => {
  try {
    const res = await axios.get(
      'https://loginback-lg51.onrender.com/ping',
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

export default pingHandler;