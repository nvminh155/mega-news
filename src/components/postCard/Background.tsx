import { cn } from "@/lib/cn";

import { EPostCardType, TPostCard } from "./type";

type BackgroundProps = Pick<TPostCard, "imageUrl" | "title" | "type"> & {
  imageClassName: string;
};

const Background: React.FC<BackgroundProps> = ({ ...props }) => {
  return (
    <img
      src={props.imageUrl}
      alt={props.title}
      className={cn(
        "rounded-[12px] object-cover",
        props.imageClassName,
        props.type !== EPostCardType.vertical && "flex-shrink-0"
      )}
    />
  );
};

export default Background;
