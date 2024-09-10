import { TPost } from "@/types/post";
import { request } from "@/config/request";

const postAPI = {
  getPosts: async () => {
    const response = await request.get<TPost>("/posts");
    return response.data;
  },
  getPost: async (id: string) => {
    const response = await request.get<TPost>(`/posts/${id}`);
    return response.data;
  },
};

export default postAPI;
