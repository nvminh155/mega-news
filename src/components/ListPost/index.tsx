import { useRef } from "react";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/cn";
import { Iconfy } from "@/components/Iconfy";
import PostCard from "@/components/PostCard";
import { EPostCardSize } from "@/components/PostCard/type";

import { TitleSection } from "../TitleSection";
import { mockPosts } from "./data/mockPosts";
import NewPost from "./NewPost";

interface PostProps {
  title: "popular" | "trendy" | "top" | "your" | "related";
}

const ListPost = ({ title }: PostProps) => {
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
      <div className="flex items-center justify-between">
        {title && <TitleSection className="text-lg" text={t(title)} />}
        <div className="mr-1 space-x-5" style={{ textAlign: "right" }}>
          <button
            className="h-[40px] w-[40px] rounded-xl bg-gray text-tertiary-black50 hover:text-tertiary"
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
            className="h-[40px] w-[40px] rounded-xl bg-gray text-tertiary-black50 hover:text-tertiary"
            onClick={next}
          >
            <div className="flex items-center justify-center">
              <Iconfy icon={"ic:round-navigate-next"} className="text-md" />
            </div>
          </button>
        </div>
      </div>
      <Carousel
        ref={sliderRef}
        // autoplay
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
          newData.map((post, i) => (
            <div
              key={post.id}
              className={cn(
                "h-[389px] max-w-[360px]",
                i === 0 && "-pl-6",
                i > 0 && "pl-6"
              )}
            >
              <PostCard post={post} size={EPostCardSize.medium} />
            </div>
          ))
        ) : (
          <div>Không có bài viết nào để hiển thị</div>
        )}
      </Carousel>
    </div>
  );
};

ListPost.News = NewPost;

export default ListPost;
