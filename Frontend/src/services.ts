import axios from 'axios';

const API_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token: string) => {
  if (token) {
    api.defaults.headers.common['x-auth-token'] = token;
    localStorage.setItem('token', token);
  } else {
    delete api.defaults.headers.common['x-auth-token'];
    localStorage.removeItem('token');
  }
};

export const signup = async (username: string, email: string, password: string) => {
  const response = await api.post('/signup', { username, email, password });
  return response.data;
};

export const login = async (email: string, password: string) => {
  console.log('Sending login request:', { email, password });
  const response = await api.post('/', { email, password });
  console.log('Login response:', response.data);
  return response.data;
};

// export const getCurrentUser = async () => {
//   const response = await api.get('/');
//   return response.data;
// };

export default api;

