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
