import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  responseType: 'json',
  params: {}
})

axiosInstance.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response?.data?.error) {
      throw new Error(error.response?.data?.error)
    } else {
      throw error;
    }
  }
)

axiosInstance.interceptors.request.use((config) => {
  config.params['language'] = 'en-US';
  config.params['include_adult'] = false;
  config.params['api_key'] = process.env.REACT_APP_API_KEY;
  config.params['query'] = config.query;
  config.params['page'] = config.page;
  
  return config;
});

export { axiosInstance };

export default class BaseService {
  constructor() {
    /**@type {import('axios').AxiosInstance} */
    this.axiosInstance = axiosInstance;
  }
}

