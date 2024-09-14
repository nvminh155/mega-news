import { useRef } from "react";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { useTranslation } from "react-i18next";

import { Iconfy } from "@/components/Iconfy";
import PostCard from "@/components/PostCard";
import { EPostCardSize } from "@/components/PostCard/type";

import { TitleSection } from "../TitleSection";
import { mockPosts } from "./data/mockPosts";

interface PostProps {
  title: "popular" | "trendy" | "top" | "your" | "related";
}

const Posts = ({ title }: PostProps) => {
  const { t } = useTranslation("posts");
  const newData = [...mockPosts, ...mockPosts];

  const sliderRef = useRef<CarouselRef>(null);
  const next = () => {
    sliderRef.current?.next();
  };

  const previous = () => {
    sliderRef.current?.prev();
  };

  return (
    <div>
      {title && (
        <div className="flex items-center justify-start">
          <TitleSection className="text-lg" text={t(title)} />
        </div>
      )}
      <div className="mr-1 space-x-5" style={{ textAlign: "right" }}>
        <button
          className="text-tertiary-black50 h-[40px] w-[40px] rounded-xl bg-gray hover:text-tertiary"
          onClick={previous}
        >
          <div className="flex items-center justify-center">
            <Iconfy
              className="text-md"
              icon={"iconamoon:arrow-left-2-duotone"}
            />
          </div>
        </button>
        <button
          className="text-tertiary-black50 h-[40px] w-[40px] rounded-xl bg-gray hover:text-tertiary"
          onClick={next}
        >
          <div className="flex items-center justify-center">
            <Iconfy icon={"ic:round-navigate-next"} className="text-md" />
          </div>
        </button>
      </div>
      <Carousel
        ref={sliderRef}
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
            <div className="flex h-[389px] items-center space-x-2">
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
