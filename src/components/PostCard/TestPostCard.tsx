import { useEffect, useState } from "react";
import { TUser } from "@/types";
import { cva, VariantProps } from "class-variance-authority";

import Author from "./Author";

const postCardVariants = cva(
  "w-full p-sm max-h-[210px] max-mobile:w-full bg-white shadow-lg rounded-md",
  {
    variants: {
      variant: {
        horizontal: "flex gap-[10px] w-full max-w-[744px]",
        vertical: "w-full",
      },
    },
    defaultVariants: {
      variant: "horizontal",
    },
  }
);

type TTestPostCardProps = {
  className?: string;
} & VariantProps<typeof postCardVariants>;

const imgURL =
  "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-3d-thien-nhien-003.jpg";

const TestPostCard = ({
  variant = "horizontal",
  className,
}: TTestPostCardProps) => {
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
    <div className={postCardVariants({ variant, className }) + ""}>
      <img
        src={imgURL}
        alt="img-post"
        className="max-w-[340px] rounded-md object-cover max-mobile:max-h-[186px]"
      />
      <div className="flex flex-1 flex-col pt-[16px]">
        <div className="flex flex-1 flex-col gap-sm">
          <span className="font-medium text-tertiary">Title</span>
          <p className="line-clamp-2 text-sm text-tertiary/75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ad
            ex eligendi, asperiores accusamus minus accusantium numquam eaque,
            in praesentium eius obcaecati. Magni sint harum nihil quo dolorem
            libero ullam!
          </p>
        </div>

        {author && <Author {...author} />}
      </div>
    </div>
  );
};

export default TestPostCard;
