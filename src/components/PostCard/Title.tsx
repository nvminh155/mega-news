import { TPost } from "@/types";

import { cn } from "@/lib/cn";

import { EPostCardType, TPostCard } from "./type";

type TitleProps = Pick<TPostCard, "type"> & Pick<TPost, "title">;

const Title: React.FC<TitleProps> = ({ ...props }) => {
  return (
    <div
      className={cn(
        props.type !== EPostCardType.widget && "py-4 pl-[6px] pr-4"
      )}
    >
      <p
        className={cn(
          "w-full font-semibold",
          props.type === EPostCardType.widget
            ? "line-clamp-2 text-[13px]"
            : "line-clamp-1"
        )}
      >
        {props.title}
      </p>
    </div>
  );
};

export default Title;
