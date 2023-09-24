// AuthService.ts

import { AxiosResponse } from "axios";
import api from "./api";

class FilesService {
  static async uploadPost(token: string, file: File): Promise<GLBFile[]> {
    console.log(file)
    const formData = new FormData();
    formData.append("glbFile", file);
    const response: AxiosResponse<GLBFile[]> = await api.post(
      "/post",
      formData,
      {
        headers: {
          authorization: token,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  }
  static async fetchPosts(token: string): Promise<GLBFile[]> {
    const response: AxiosResponse<GLBFile[]> = await api.get("/post", {
      headers: {
        authorization: token,
      },
    });
    return response.data;
  }
  static async fetchPostsByUser(token: string): Promise<GLBFile[]> {
    const response: AxiosResponse<GLBFile[]> = await api.get("/post/user", {
      headers: {
        authorization: token,
      },
    });
    return response.data;
  }
}

export default FilesService;
