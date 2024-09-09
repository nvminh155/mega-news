import { request } from "@/config/request";

export type TComment = {
  id: string;
  content: string;
  authorId: string;
  postId: string;
  displayName?: string;
  website?: string;
  email?: string;
  rate?: number;
  createdAt?: number;
  replyTo?: string;
};

const CommentAPI = {
  getComments: async () => {
    const response = await request.get("/comments");
    return response.data;
  },
  getComment: async (id: string) => {
    const response = await request.get(`/comments/${id}`);
    return response.data;
  },
};

export default CommentAPI;
