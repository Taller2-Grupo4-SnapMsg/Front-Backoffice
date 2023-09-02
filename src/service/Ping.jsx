import axios from "axios";

const pingHandler = async (_) => {
  try {
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    const res = await axios.get(
      `https://loginback-lg51.onrender.com/ping`,
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