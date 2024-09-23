import axios from 'axios';

const BASE_API = process.env.VUE_APP_BASE_API;
const SECRET_KEY = process.env.VUE_API_KEY;

const service = axios.create({
  baseURL: BASE_API
});

/* Настройка всех запросов */
service.interceptors.request.use(
  (config) => {
    const conf = config;

    conf.headers['X-API-KEY'] = SECRET_KEY;
    conf.headers['Content-Type'] = 'application/json';

    return conf;
  },
  (error) => {
    Promise.reject(error);
  }
);

/* Настройка всех ответов */
service.interceptors.response.use(
  (response) => {
    const { data } = response;

    return data;
  },
  (error) => {
    /* error status 401, 403, 404, 500 */
    if (error.status === 401) {
      console.log('logout');
    }

    return Promise.reject(new Error(error));
  }
);

export { BASE_API };

export default service;
