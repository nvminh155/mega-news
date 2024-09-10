import { request } from "@/config/request";
import { TUser } from "@/types/user";

const userAPI = {
  getUsers: async () => {
    const response = await request.get<TUser>("/users");
    return response.data;
  },
  getUser: async (id: string) => {
    const response = await request.get<TUser>(`/users/${id}`);
    return response.data;
  },
};

export default userAPI;
