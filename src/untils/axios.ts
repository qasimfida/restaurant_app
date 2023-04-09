import axios, {AxiosInstance,AxiosRequestConfig} from 'axios';
import Cookies from 'js-cookie';
type HeaderKey = keyof AxiosRequestConfig['headers'];
const headers:Record<HeaderKey, string> = () => {
    const header:AxiosRequestConfig['headers']  = {
        'Content-Type': 'application/json',
    }
    const authToken = Cookies.get('token');
    if (authToken) {
        header['Authorization'] = `bearer ${authToken}`
    }
    return header
}

const https:AxiosInstance = axios.create({
    baseURL: process.env.APP_URL,
    timeout: 50000,
    ...headers
  });
  https.interceptors.request.use((config) => {
    const authToken = Cookies.get('token');
    if (authToken) {
      config.headers.Authorization = `bearer ${authToken}`;
    }
    return config;
  });
export default https