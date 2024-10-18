import { axiosApi } from "@/lib/axios";
import { TPost } from "@/types/post";

const postPath = "/posts";

const postAPI = {
  getPosts: async (numberOfPost?: number) => {
    const response = await axiosApi.getList<TPost[]>(postPath);
    const posts = response.data.sort((a, b) => b.createdAt - a.createdAt);

    return posts.slice(0, numberOfPost ?? posts.length);
  },
  getPost: async (id: string) => {
    return await axiosApi.get<TPost>(postPath + `/${id}`);
  },
};

export default postAPI;
