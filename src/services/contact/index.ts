import { TContact } from "@/types/contact";
import { request } from "@/config/request";

const contactAPI = {
  getContacts: async () => {
    const response = await request.get<TContact>("/contacts");
    return response.data;
  },
  getContact: async (id: string) => {
    const response = await request.get<TContact>(`/contacts/${id}`);
    return response.data;
  },
};

export default contactAPI;
