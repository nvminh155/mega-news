import { TTag } from "@/types";

import { request } from "@/config/request";

const tagAPI = {
  getTags: async () => {
    const response = await request.get<TTag[]>("/tags");
    return response.data;
  },
  getTag: async (id: string) => {
    const response = await request.get<TTag>(`/tags/${id}`);
    return response.data;
  },
};

export default tagAPI;
