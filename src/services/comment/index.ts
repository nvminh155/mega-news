import { TComment } from "@/types/comment";
import { request } from "@/config/request";

const commentAPI = {
  getComments: async () => {
    const response = await request.get<TComment[]>("/comments");
    return response.data;
  },
  getComment: async (id: string) => {
    const response = await request.get<TComment>(`/comments/${id}`);
    return response.data;
  },
};

export default commentAPI;
