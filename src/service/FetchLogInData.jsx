import { METRICS_URL } from '../constants.js';
import { headers_token } from '../constants.js';


const fetchEmailSucc = async (url) => {
  const params = new URLSearchParams();
  params.append('entity', 'email');
  params.append('successful', false);

  const fullUrl = `${url}?${params.toString()}`;

  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: headers_token,
  });
  const data = await response.json();
  return parseInt(data.amount_logins);
}

const fetchFederatedSucc = async (url) => {
  const params = new URLSearchParams();
  params.append('entity', 'federated');
  params.append('successful', true);
  
  const fullUrl = `${url}?${params.toString()}`;

  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: headers_token,
  });
  
  return await response.json();
}

const fetchEmailFail = async (url) => {
  const params = new URLSearchParams();
  params.append('entity', 'email');
  params.append('successful', false);
  
  const fullUrl = `${url}?${params.toString()}`;

  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: headers_token,
  });

  const data = await response.json();
  return parseInt(data.amount_logins);
}

const fetchAllSucc = async (url) => {
  const params = new URLSearchParams();
  params.append('entity', 'all');
  params.append('successful', true);
  
  const fullUrl = `${url}?${params.toString()}`;

  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: headers_token,
  });

  const data = await response.json();
  return parseInt(data.amount_logins);
}

const fetchAllFail = async (url) => {
  const params = new URLSearchParams();
  params.append('entity', 'all');
  params.append('successful', false);
  
  const fullUrl = `${url}?${params.toString()}`;

  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: headers_token,
  });

  const data = await response.json();
  return parseInt(data.amount_logins);
}



const FetchLogInData = async () => {
  try {
      const url = `${METRICS_URL}login`

      const dataEmailSucc = await fetchEmailSucc(url);
      const dataFederatedSucc = await fetchFederatedSucc(url);
      const dataEmailFail = await fetchEmailFail(url);
      const dataAllSucc = await fetchAllSucc(url);
      const dataAllFail = await fetchAllFail(url);
      
      console.log(dataEmailSucc);

      const newData = {
        amount_email_succ: dataEmailSucc,
        amount_federated_succ: dataFederatedSucc,
        amount_email_fail: dataEmailFail,
        amount_all_succ: dataAllSucc,
        amount_all_fail: dataAllFail,
      };
      return newData;
    } catch (error) {
      console.error('Error fetching user: ', error);
    }
};

export default FetchLogInData;