import { useTranslation } from "react-i18next";

import { Iconfy } from "../Iconfy";
import PostCard from "../PostCard";
import { EPostCardSize, EPostCardType } from "../PostCard/type";
import { TitleSection } from "../TitleSection";
import { mockPosts } from "./data/mockPosts";

// type TNewPostProps = {
//   className?: string;
// }
const NewPost = () => {
  const { t } = useTranslation("posts");
  const newData = [...mockPosts, ...mockPosts];
  // const sliderRef = useRef<CarouselRef>(null);
  // const next = () => {
  //   sliderRef.current?.next();
  // };

  // const previous = () => {
  //   sliderRef.current?.prev();
  // };

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

      <div className="grid gap-5 max-tablet:grid-cols-1 max-tablet:justify-center desktop:grid-cols-2">
        {newData.length > 0 ? (
          newData.map((post, i) => (
            <PostCard
              key={post.id + i}
              post={post}
              type={EPostCardType.horizontal}
              size={EPostCardSize.large}
              className="max-tablet:w-full desktop:w-1/2"
            />
          ))
        ) : (
          <div>Không có bài viết nào để hiển thị</div>
        )}
      </div>
    </>
  );
};

export default NewPost;
