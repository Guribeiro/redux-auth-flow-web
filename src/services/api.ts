import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:2018`,
});

export default api;
