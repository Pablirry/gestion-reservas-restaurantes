import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export const getReservas = () => api.get('/reservas');
export const getMesas = () => api.get('/mesas');
export const getHorarios = () => api.get('/horarios');
export const getUsuarios = () => api.get('/usuarios');
export const createReserva = (data) => api.post('/reservas', data);
export const registerUser = (data) => api.post('/auth/registro', data);
export const loginUser = (data) => api.post('/auth/login', data);

export default api;
export const createMesa = (data) => api.post('/mesas', data);