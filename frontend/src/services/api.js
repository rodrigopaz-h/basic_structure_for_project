import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export default api;
// En este archivo se exporta 'api' a cualquier archivo que necesite interactuar con la API
