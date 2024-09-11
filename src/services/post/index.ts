import { axiosApi } from "@/lib/axios";
import { TPost } from "@/types/post";

const postPath = "/posts";

const postAPI = {
  getPosts: async () => {
    return await axiosApi.getList<TPost[]>(postPath);
  },
  getPost: async (id: string) => {
    return await axiosApi.get<TPost>(postPath + `/${id}`);
  },
};

export default postAPI;
