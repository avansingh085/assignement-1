import axios from 'axios';

const apiClient = axios.create({
  baseURL:import.meta.env.BACKEND_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const setAuthToken = (token) => {
  localStorage.setItem('authToken', token);
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const removeAuthToken = () => {
  localStorage.removeItem('authToken');
  delete apiClient.defaults.headers.common['Authorization'];
};

export const postData = async (endpoint, data) => {
    try {
      const response = await apiClient.post(endpoint, data);
      console.log('Response:', response.data); 
      return response.data;
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

 export  const getData = async (endpoint, params = {}) => {
    try {
      const response = await apiClient.get(endpoint, { params });
      console.log('Response:', response.data); 
      return response.data;
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      throw error;
    }
  };

export default apiClient;