import { TUser } from "./user";

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
