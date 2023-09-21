const headers = {
    'Content-Type': 'application/json;charset=utf-8',
    'Access-Control-Allow-Origin': '*',
};

const GetUsersHandler = async () => {
    try {
      const response = await fetch('https://loginback-lg51.onrender.com/users/', {
        method: 'GET',
        headers: headers,
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
  
      const responseData = await response.json();
      return responseData; // Return the entire response data
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Failed to fetch users');
    }
  };
  
  export default GetUsersHandler;
  