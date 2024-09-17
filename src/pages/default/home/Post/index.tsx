import { Carousel } from "antd";
import { useTranslation } from "react-i18next";

import PostCard from "@/components/PostCard";
import { EPostCardSize } from "@/components/PostCard/type";
import { TitleSection } from "@/components/TitleSection";

import { mockPosts } from "./data/mockPosts";

interface PostProps {
  title: "popular" | "trendy" | "top" | "your";
}

const Posts = ({ title }: PostProps) => {
  const { t } = useTranslation("posts");

  const newData = [...mockPosts, ...mockPosts];

  return (
    <div>
      {title && (
        <div className="flex items-center justify-start">
          <TitleSection className="text-lg" text={t(title)} />
        </div>
      )}
      <Carousel
        autoplay
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
        ]}
        slidesToShow={4}
        dots={false}
        arrows={false}
        style={{ padding: "0px" }}
      >
        {newData.length > 0 ? (
          newData.map((post) => (
            <div
              key={post.id}
              className="flex h-[389px] items-center space-x-2"
            >
              <PostCard key={post.id} post={post} size={EPostCardSize.medium} />
            </div>
          ))
        ) : (
          <div>Không có bài viết nào để hiển thị</div>
        )}
      </Carousel>
    </div>
  );
};

export default Posts;
