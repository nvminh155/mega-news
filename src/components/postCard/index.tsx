import React from "react";

import { cn } from "@/lib/cn";

import Action, { TAction } from "./action";
import Author, { TAuthor } from "./author";

export type TPostCardProps = {
  imageUrl?: string;
  title: string;
  description?: string;
  author?: TAuthor;
  size?: "lg" | "md";
  type?: "horizontal" | "vertical" | "widget";
  actions?: TAction;
};

const getSize = (type: string, size: string) => {
  let imageClassName = "w-full ";
  let postCardWidth = "w-full max-w-[488px] ";

  if (type === "vertical" && size === "lg") {
    imageClassName += "h-[327px]";
  } else if (type === "vertical" && size === "md") {
    imageClassName += "h-[190px]";
    postCardWidth += "max-w-[360px]";
  } else if (type === "horizontal" && size === "lg") {
    imageClassName += "h-[190px] max-w-[340px]";
    postCardWidth += "max-w-[744px]";
  } else if (type === "horizontal" && size === "md") {
    imageClassName += "h-[190px] max-w-[190px]";
  } else {
    imageClassName += "h-[87px] max-w-[87px]";
    postCardWidth += "max-w-[320px]";
  }

  return [imageClassName, postCardWidth];
};

const PostCard: React.FC<TPostCardProps> = ({
  imageUrl = "/not-found.png",
  title,
  description,
  author,
  size = "lg",
  type = "vertical",
  actions,
}) => {
  const [imageClassName, postCardWidth] = getSize(type, size);

  return (
    <div
      className={cn(
        type === "widget" ? "flex" : "flex rounded-lg p-[10px] shadow-md",
        postCardWidth,
        type === "vertical" ? "flex-col" : "flex-row gap-[10px]"
      )}
    >
      <img
        src={imageUrl}
        alt={title}
        className={cn(
          "rounded-[12px] object-cover",
          imageClassName,
          type !== "vertical" && "flex-shrink-0"
        )}
      />
      <div
        className={cn(
          "flex flex-col",
          type === "widget" && "items-center justify-center"
        )}
      >
        <div className={cn(type !== "widget" && "py-4 pl-[6px] pr-4")}>
          <p
            className={cn(
              "w-full font-semibold",
              type === "widget" ? "line-clamp-2 text-[13px]" : "line-clamp-1"
            )}
          >
            {title}
          </p>
        </div>
        {description && (
          <div
            className={cn(
              "w-full",
              type === "vertical" && "pb-4 pl-[6px] pr-4",
              type === "horizontal" && "pb-[26px] pl-[6px] pr-4"
            )}
          >
            <p
              className={cn(
                "text-sm text-[#3E3232BF]",
                type === "vertical" && "line-clamp-2",
                type === "horizontal" &&
                  (!author)
                  ? "line-clamp-6"
                  : "line-clamp-2",
                type === "widget" && "line-clamp-1 text-[12px]"
              )}
            >
              {description}
            </p>
          </div>
        )}
        {author && (
          <Author
            name={author.name}
            title={author.title}
            avatarUrl={author.avatarUrl}
          />
        )}
        {actions && (
          <Action viewers={actions.viewers || []} stars={actions.stars || []} />
        )}
      </div>
    </div>
  );
};

export default PostCard;
