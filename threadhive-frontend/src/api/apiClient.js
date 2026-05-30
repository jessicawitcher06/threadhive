import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';
// const API_BASE_URL = 'https://w04-mls.onrender.com/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token && token !== 'undefined' && token !== 'null') {
    config.headers.Authorization = 'Bearer ' + token;
  }

  return config;
});

export const fetchAPI = async (endpoint, options = {}) => {
  const config = {
    url: endpoint,
    method: options.method || 'GET',
    headers: options.headers,
    data: options.body,
    params: options.params,
  };

  const response = await apiClient.request(config);
  return response.data;
};

export { apiClient };
export default fetchAPI;
