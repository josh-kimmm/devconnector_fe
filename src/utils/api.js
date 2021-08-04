import axios from 'axios';
import { DEV_URL, PROD_URL } from './config';

export default axios.create({
    baseURL: process.env.NODE_ENV !== "production" ? DEV_URL : PROD_URL,
    responseType: "json"
});