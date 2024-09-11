import { TCategory } from "@/types/category";
import { request } from "@/config/request";

const categoryAPI = {
  getCategories: async () => {
    const response = await request.get<TCategory[]>("/categories");
    return response.data;
  },
  getCategory: async (id: string) => {
    const response = await request.get<TCategory>(`/categories/${id}`);
    return response.data;
  },
};

export default categoryAPI;
