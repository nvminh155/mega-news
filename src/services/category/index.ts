import { request } from "@/config/request";
import { TCategory } from "@/types/category";

const categoryAPI = {
  getCategories: async () => {
    const response = await request.get<TCategory>("/categories");
    return response.data;
  },
  getCategory: async (id: string) => {
    const response = await request.get<TCategory>(`/categories/${id}`);
    return response.data;
  },
};

export default categoryAPI;
