import { request } from "@/config/request";

export type TCategory = {
  id: string;
  name: string;
};

const CategoryAPI = {
  getCategories: async () => {
    const response = await request.get("/categories");
    return response.data;
  },
  getCategory: async (id: string) => {
    const response = await request.get(`/categories/${id}`);
    return response.data;
  },
};

export default CategoryAPI;
