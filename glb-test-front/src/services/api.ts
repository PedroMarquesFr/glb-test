// api.ts

import axios, { AxiosInstance } from 'axios';

// Define a custom Axios instance with a base configuration
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Replace with your API base URL
  timeout: 10000, // Set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true
  },
});

// Define a generic response type that you can use for your API responses
export interface ApiResponse<T> {
  data: T;
}

// Export the Axios instance
export default api;
