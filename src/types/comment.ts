import { z } from "@/i18n";
import { commentSchema } from "@/schemas/comment";

export type TComment = {
  id: string;
  content: string;
  authorId: string;
  postId: string;
  displayName?: string;
  website?: string;
  email?: string;
  rate?: number;
  createdAt?: number;
  replyTo?: string;
};

export type TCommentForm = z.infer<typeof commentSchema>;
