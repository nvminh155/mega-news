import { TPost } from "@/services";

// Define the enum for type of post card
enum EPostCardType {
  horizontal = "horizontal",
  vertical = "vertical",
  widget = "widget",
}

// Define the enum for size of post card
enum EPostCardSize {
  large = "lg",
  medium = "md",
}

type TPostCard = {
  post: TPost;
  size?: EPostCardSize;
  type?: EPostCardType;
  actions?: TAction;
};

type TAction = {
  viewers?: string[];
  stars?: string[];
};

export type { TPostCard, TAction };
export { EPostCardType, EPostCardSize };
