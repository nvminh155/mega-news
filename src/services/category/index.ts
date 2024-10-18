import { TCategory } from "@/types/category";

import { axiosApi } from "@/lib/axios";
const categoriesPath = "/categories";
const categoryAPI = {
  getcategories: async () => {
    return await axiosApi.getList<TCategory[]>(categoriesPath);
  },
  getcategory: async (id: string) => {
    return await axiosApi.get<TCategory>(categoriesPath + `/${id}`);
  },
};

export default categoryAPI;
