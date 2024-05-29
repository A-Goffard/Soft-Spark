import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Reemplaza con la URL de tu API Flask
});

export default api;