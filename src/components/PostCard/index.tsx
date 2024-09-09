import { cn } from "@/lib/cn";

import Action from "./Action";
import Author from "./Author";
import Background from "./Background";
import Description from "./Description";
import Title from "./Title";
import { EPostCardSize, EPostCardType, TAuthor, TPostCard } from "./type";
import { imageVariants, postCardVariants } from "./variants";

type TPostCardProps = TPostCard;

const PostCard: React.FC<TPostCardProps> = ({
  imageUrl = "/not-found.png",
  title,
  description,
  author,
  size = EPostCardSize.large,
  type = EPostCardType.vertical,
  actions,
}) => {
  return (
    <div
      className={cn(
        type === EPostCardType.widget
          ? "flex"
          : "flex rounded-lg p-[10px] shadow-md",
        postCardVariants({
          postCardWidth: `${type}-${size}` as keyof typeof postCardVariants,
        }),
        type === EPostCardType.vertical ? "flex-col" : "flex-row gap-[10px]"
      )}
    >
      <Background
        type={type}
        title={title}
        imageUrl={imageUrl}
        imageClassName={imageVariants({
          imageClassName: `${type}-${size}` as keyof typeof imageVariants,
        })}
      />
      <div
        className={cn(
          "flex flex-col",
          type === EPostCardType.widget && "items-center justify-center",
          type === EPostCardType.horizontal && "h-[190px]"
        )}
      >
        <Title type={type} title={title} />
        {description && (
          <Description
            type={type}
            description={description}
            author={author as TAuthor}
          />
        )}
        {author && <Author {...author} />}
        {actions && (
          <Action viewers={actions.viewers || []} stars={actions.stars || []} />
        )}
      </div>
    </div>
  );
};

export default PostCard;
