import axios from 'axios';
import { DEV_URL, PROD_URL } from './config';

const api = axios.create({
    baseURL: process.env.NODE_ENV !== "production" ? DEV_URL : PROD_URL,
    responseType: "json"
});

export const setAuthToken = token => {
    if(token) {
        api.defaults.headers.common['x-auth-token'] = token;
        return;
    }

    delete api.defaults.headers.common['x-auth-token'];
};

export default api;