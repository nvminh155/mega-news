import { cn } from "@/lib/cn";

import { EPostCardType, TPostCard } from "./type";

type DescriptionProps = Pick<TPostCard, "type" | "description" | "author">;

const Description: React.FC<DescriptionProps> = ({ ...props }) => {
  return (
    <div
      className={cn(
        "w-full pb-4 pl-[6px] pr-4",
        props.type === EPostCardType.horizontal && props.author && "pb-[26px]",
        props.type === EPostCardType.widget && "pb-0 pl-0 pr-0"
      )}
    >
      <p
        className={cn(
          "text-sm text-tertiary/50",
          props.type === EPostCardType.vertical && "line-clamp-2",
          props.type === EPostCardType.horizontal && !props.author
            ? "line-clamp-6"
            : "line-clamp-2",
          props.type === EPostCardType.widget && "line-clamp-1 text-[12px]"
        )}
      >
        {props.description}
      </p>
    </div>
  );
};

export default Description;
