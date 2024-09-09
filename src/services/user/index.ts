import { request } from "@/config/request";

export type TUser = {
  id: string;
  avatarUrl?: string;
  bannerUrl?: string;
  firstName: string;
  lastName: string;
  userName: string;
  password?: string;
  email?: string;
  title?: string;
  followerIds?: string[];
  explanationHTML?: string;
};

const UserAPI = {
  getUsers: async () => {
    const response = await request.get("/users");
    return response.data;
  },
  getUser: async (id: string) => {
    const response = await request.get(`/users/${id}`);
    return response.data;
  },
};

export default UserAPI;
