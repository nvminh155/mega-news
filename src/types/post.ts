import { z } from "@/i18n";
import { TUser } from "./user";
import { newsSchema } from "@/schemas/news";

export type TPost = {
  id: string;
  imageUrl?: string;
  videoUrl?: string;
  imageGallery?: string[];
  title: string;
  explanationHTML?: string;
  authorId?: string | TUser;
  tags?: string[];
  categoryIds?: string[];
  bookmarkList?: string[];
  draft?: boolean;
  isPublished?: boolean;
  createdAt: number;
};

export type TFormSendNews = z.infer<typeof newsSchema>;