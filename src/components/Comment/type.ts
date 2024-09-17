import { TUser } from "@/types";

enum ECommentSize {
  small = "small",
  large = "large",
}

type TCommentProps = {
  size?: ECommentSize;
  author: Pick<TUser, "firstName" | "lastName" | "avatarUrl">;
  content: string;
  replies?: TCommentProps[];
  createdAt?: number;
};

export type { TCommentProps };
export { ECommentSize };
