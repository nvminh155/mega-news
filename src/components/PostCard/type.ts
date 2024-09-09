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
  imageUrl?: string;
  title: string;
  description?: string;
  author?: TAuthor;
  size?: EPostCardSize;
  type?: EPostCardType;
  actions?: TAction;
};

type TAction = {
  viewers?: string[];
  stars?: string[];
};

type TAuthor = {
  avatarUrl?: string;
  name?: string;
  title?: string;
};

export type { TPostCard, TAction, TAuthor };
export { EPostCardType, EPostCardSize };
