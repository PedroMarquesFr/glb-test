// AuthService.ts

import { AxiosResponse, AxiosError } from "axios";
import api, { ApiResponse } from "./api";


class FilesService {
  //   static async addPost(credentials: { email: string; password: string }): Promise<AuthResponse> {
  //     try {
  //       const response: AxiosResponse<AuthResponse> = await api.post('/login', credentials);
  //       return response.data;
  //     } catch (error) {
  //       const axiosError = error as AxiosError;
  //       return axiosError.response?.data as AuthResponse;
  //     }
  //   }
  static async fetchPosts(token: string): Promise<GLBFile[] | {massage: string}> {
    try {
      const response: AxiosResponse<GLBFile[]> = await api.get(
        "/user",
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      return axiosError.response?.data as {massage: string};
    }
  }
}

export default FilesService;
