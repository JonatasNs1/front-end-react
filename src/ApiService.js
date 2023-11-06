import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const ApiService = {
  get: (url) => api.get(url),
  post: (url, data) => api.post(url, data),
  // Outras funções para manipular solicitações
};