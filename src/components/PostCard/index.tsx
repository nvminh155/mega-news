import { useEffect, useState } from "react";
// import { userAPI } from "@/services";
import { TUser } from "@/types";

import { cn } from "@/lib/cn";

import Action from "./Action";
import Author from "./Author";
import Background from "./Background";
import Description from "./Description";
import Title from "./Title";
import { EPostCardSize, EPostCardType, TPostCard } from "./type";
import { imageVariants, postCardVariants } from "./variants";

type TPostCardProps = TPostCard & {
  className?: string;
};

const PostCard: React.FC<TPostCardProps> = ({
  post,
  size = EPostCardSize.large,
  type = EPostCardType.vertical,
  actions,
  className,
}) => {
  const [author, setAuthor] = useState<TUser>();

  const fetchAuthorData = async () => {
    setAuthor({
      id: "user1",
      avatarUrl:
        "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-3d-thien-nhien-003.jpg",
      bannerUrl:
        "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-3d-thien-nhien-003.jpg",
      firstName: "John",
      lastName: "Doe",
      userName: "johndoe",
      password: "123456",
      email: "abc1@gmail.com",
      title: "Hello World",
      followerIds: ["user2"],
      explanationHTML: "This is my explanation",
    });
    // try {
    //   if (post.authorId) {
    //     const response = await userAPI.getUser(post.authorId as string);
    //     setAuthor(response.data);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  useEffect(() => {
    fetchAuthorData();
  }, []);

  return (
    <div
      className={cn(
        type === EPostCardType.widget
          ? "flex"
          : "flex rounded-lg p-[10px] shadow-md",
        postCardVariants({
          postCardWidth: `${type}-${size}` as keyof typeof postCardVariants,
        }),
        type === EPostCardType.vertical ? "flex-col" : "flex-row gap-[10px]",
        className
      )}
    >
      <Background
        type={type}
        imageUrl={post.imageUrl}
        title={post.title}
        imageClassName={imageVariants({
          imageClassName: `${type}-${size}` as keyof typeof imageVariants,
        })}
      />
      <div
        className={cn(
          "flex flex-1 flex-col",
          type === EPostCardType.widget && "items-center justify-center",
          // type === EPostCardType.horizontal && "h-max"
        )}
      >
        <Title type={type} title={post.title} />
        {post.explanationHTML && (
          <Description
            type={type}
            authorId={post.authorId}
            explanationHTML={post.explanationHTML}
          />
        )}
        {type !== EPostCardType.widget && author && <Author {...author} />}
        {type !== EPostCardType.widget && actions && (
          <Action viewers={actions.viewers || []} stars={actions.stars || []} />
        )}
      </div>
    </div>
  );
};

export default PostCard;
