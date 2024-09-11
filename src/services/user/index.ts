import { request } from "@/config/request";
import { axiosApi } from "@/lib/axios";
import { TUser } from "@/types/user";

const userAPI = {
  getUsers: async () => {
    const response = await request.get<TUser>("/users");
    return response.data;
  },
  getUser: async (id: string) => {
    return await axiosApi.get<TUser>(`/users/${id}`);
  },
};



export default userAPI;
