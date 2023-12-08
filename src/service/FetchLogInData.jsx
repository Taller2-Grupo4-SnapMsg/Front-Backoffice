import { headers_token, encodeTimestampForURL, API_URL } from '../constants.js';


const fetchEmailSucc = async (url, timestamp_begin, timestamp_end) => {
  const params = new URLSearchParams();
  params.append('entity', 'email');
  params.append('successful', false);
  params.append('timestamp_begin', timestamp_begin);
  params.append('timestamp_end', timestamp_end);

  const fullUrl = `${url}?${params.toString()}`;

  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: headers_token,
  });
  const data = await response.json();
  return parseInt(data.amount_logins);
}

const fetchFederatedSucc = async (url, timestamp_begin, timestamp_end) => {
  const params = new URLSearchParams();
  params.append('entity', 'federated');
  params.append('successful', true);
  params.append('timestamp_begin', timestamp_begin);
  params.append('timestamp_end', timestamp_end);
  
  const fullUrl = `${url}?${params.toString()}`;

  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: headers_token,
  });
  
  return await response.json();
}

const fetchFederatedFail = async (url, timestamp_begin, timestamp_end) => {
  const params = new URLSearchParams();
  params.append('entity', 'federated');
  params.append('successful', false);
  params.append('timestamp_begin', timestamp_begin);
  params.append('timestamp_end', timestamp_end);
  
  const fullUrl = `${url}?${params.toString()}`;

  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: headers_token,
  });
  
  return await response.json();
}
const fetchEmailFail = async (url, timestamp_begin, timestamp_end) => {
  const params = new URLSearchParams();
  params.append('entity', 'email');
  params.append('successful', false);
  params.append('timestamp_begin', timestamp_begin);
  params.append('timestamp_end', timestamp_end);
  
  const fullUrl = `${url}?${params.toString()}`;

  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: headers_token,
  });

  const data = await response.json();
  return parseInt(data.amount_logins);
}

const fetchAllSucc = async (url, timestamp_begin, timestamp_end) => {
  const params = new URLSearchParams();
  params.append('entity', 'all');
  params.append('successful', true);
  params.append('timestamp_begin', timestamp_begin);
  params.append('timestamp_end', timestamp_end);
  
  const fullUrl = `${url}?${params.toString()}`;

  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: headers_token,
  });

  const data = await response.json();
  return parseInt(data.amount_logins);
}

const fetchAllFail = async (url, timestamp_begin, timestamp_end) => {
  const params = new URLSearchParams();
  params.append('entity', 'all');
  params.append('successful', false);
  params.append('timestamp_begin', timestamp_begin);
  params.append('timestamp_end', timestamp_end);
  
  const fullUrl = `${url}?${params.toString()}`;

  const response = await fetch(fullUrl, {
    method: 'GET',
    headers: headers_token,
  });

  const data = await response.json();
  return parseInt(data.amount_logins);
}



const FetchLogInData = async (timestamp_begin, timestamp_end) => {
  try {
      const url = `${API_URL}/metrics_login`;
      const timestamp_begin_url = encodeTimestampForURL(timestamp_begin);
      const timestamp_end_url = encodeTimestampForURL(timestamp_end);

      const dataEmailSucc = await fetchEmailSucc(url, timestamp_begin_url, timestamp_end_url);
      const dataFederatedSucc = await fetchFederatedSucc(url, timestamp_begin_url, timestamp_end_url);
      const dataFederatedFail = await fetchFederatedFail(url, timestamp_begin_url, timestamp_end_url);
      const dataEmailFail = await fetchEmailFail(url, timestamp_begin_url, timestamp_end_url);
      const dataAllSucc = await fetchAllSucc(url, timestamp_begin_url, timestamp_end_url);
      const dataAllFail = await fetchAllFail(url, timestamp_begin_url, timestamp_end_url);

      const newData = {
        amount_email_succ: dataEmailSucc,
        amount_federated_succ: dataFederatedSucc,
        amount_federated_fail: dataFederatedFail,
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