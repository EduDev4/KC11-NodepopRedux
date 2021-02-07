import axios from 'axios';

const { REACT_APP_API_BASE_URL: baseURL } = process.env;

const { REACT_APP_API_VERSION_URL: apiVersion } = process.env;

const client = axios.create({
  baseURL,
});

const setAuthorizationHeader = token => {
  client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const removeAuthorizationHeader = () => {
  delete client.defaults.headers.common['Authorization'];
};

client.login = credentials =>
  client.post(`${apiVersion}/auth/login`, credentials).then(auth => {
    setAuthorizationHeader(auth.token);
    return auth;
  });

client.logout = () =>
  new Promise(resolve => {
    removeAuthorizationHeader();
    resolve();
  });

client.interceptors.response.use(
  ({ data: { ok, ...data } }) => {
    if (!ok) {
      return Promise.reject(data.error);
    }
    if (data.hasOwnProperty('result')) {
      return Promise.resolve(data.result);
    }
    return Promise.resolve(data);
  },
  error => {
    if (!error.response && !error.message) {
      return Promise.reject(error);
    }
    if (error.message) {
      return Promise.reject(error.message);
    }
    return Promise.reject(error.response.data.error);
  },
);

export const configureClient = token => {
  if (token) {
    setAuthorizationHeader(token);
  }
};

export default client;
