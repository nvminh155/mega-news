import { request } from "@/config/request";

export type TPost = {
  id: string;
  imageUrl?: string;
  videoUrl?: string;
  imageGallery?: string[];
  title: string;
  explanationHTML?: string;
  authorId?: string;
  tags?: string[];
  categoryIds?: string[];
  bookmarkList?: string[];
  draft?: boolean;
  isPublished?: boolean;
};

const PostAPI = {
  getPosts: async () => {
    const response = await request.get("/posts");
    return response.data;
  },
  getPost: async (id: string) => {
    const response = await request.get(`/posts/${id}`);
    return response.data;
  },
};

export default PostAPI;
