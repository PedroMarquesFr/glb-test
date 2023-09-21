// AuthService.ts

import { AxiosResponse, AxiosError } from 'axios';
import api, { ApiResponse } from './api';

// Define a TypeScript interface for the response data structure
interface AuthResponse {
  // Define your authentication response properties here
  token: string;
  user: {
    id: number;
    displayName: string;
    email: string;
  };
  message?: string;
  code?: number
}

class AuthService {
  static async login(credentials: { email: string; password: string }): Promise<AuthResponse> {
    try {
      const response: AxiosResponse<AuthResponse> = await api.post('/login', credentials);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return axiosError.response?.data as AuthResponse;
    }
  }
  static async register(credentials: { displayName: string, email: string; password: string }): Promise<AuthResponse> {
    try {
      const response: AxiosResponse<ApiResponse<AuthResponse>> = await api.post('/user', credentials);
      return response.data.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return axiosError.response?.data as AuthResponse;
    }
  }
}

export default AuthService;
