import { request } from "@/config/request";

export type TContact = {
  id: string;
  subject: string;
  name: string;
  email: string;
  explanationHTML: string;
  imageUrls?: string[];
};

const ContactAPI = {
  getContacts: async () => {
    const response = await request.get("/contacts");
    return response.data;
  },
  getContact: async (id: string) => {
    const response = await request.get(`/contacts/${id}`);
    return response.data;
  },
};

export default ContactAPI;
