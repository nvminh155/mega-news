import { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/cn";

import { Iconfy } from "../Iconfy";
import PostCard from "../PostCard";
import { EPostCardSize, EPostCardType } from "../PostCard/type";
import { TitleSection } from "../TitleSection";
import { mockPosts } from "./data/mockPosts";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

const NewPost = () => {
  const { width } = useWindowSize();
  const { t } = useTranslation("posts");
  const newData = [...mockPosts, ...mockPosts];
  const isMobile = width < 768;
  const sliderRef = useRef<CarouselRef>(null);
  const next = () => {
    sliderRef.current?.next();
  };

  const previous = () => {
    sliderRef.current?.prev();
  };

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <TitleSection className="text-lg" text={t("new")} />
        <button className="m-5 h-[40px] w-[119px] rounded-xl bg-gray text-tertiary-black50 hover:text-tertiary">
          <div className="flex items-center justify-center">
            <span>Show All</span>
            <Iconfy className="text-md" icon={"ic:round-navigate-next"} />
          </div>
        </button>
      </div>

      {isMobile ? (
        // Hiển thị Carousel khi là mobile
        <div>
          <div className="flex items-center justify-end space-x-2">
            <button
              className="z-10 h-[40px] w-[40px] rounded-xl bg-gray text-tertiary-black50 hover:text-tertiary"
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
              className="z-10 h-[40px] w-[40px] rounded-xl bg-gray text-tertiary-black50 hover:text-tertiary"
              onClick={next}
            >
              <div className="flex items-center justify-center">
                <Iconfy icon={"ic:round-navigate-next"} className="text-md" />
              </div>
            </button>
          </div>

          <Carousel
            ref={sliderRef}
            // autoplay
            responsive={[
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
            slidesToShow={1}
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
      ) : (
        // Hiển thị grid khi là desktop/tablet
        <div className="grid gap-5 max-tablet:grid-cols-1 max-tablet:justify-center desktop:grid-cols-2">
          {newData.length > 0 ? (
            newData.map((post, i) => (
              <PostCard
                key={post.id + i}
                post={post}
                type={EPostCardType.horizontal}
                size={width >= 768 ? EPostCardSize.large : EPostCardSize.medium}
                className="max-tablet:w-full"
              />
            ))
          ) : (
            <div>Không có bài viết nào để hiển thị</div>
          )}
        </div>
      )}
    </>
  );
};

export default NewPost;
