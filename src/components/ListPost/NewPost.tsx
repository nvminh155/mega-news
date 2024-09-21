import { useTranslation } from "react-i18next";

import { Iconfy } from "../Iconfy";
import PostCard from "../PostCard";
import { EPostCardType } from "../PostCard/type";
import { TitleSection } from "../TitleSection";
import { mockPosts } from "./data/mockPosts";

const NewPost = () => {
  const { t } = useTranslation("posts");
  const newData = [...mockPosts, ...mockPosts];
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <TitleSection className="text-lg" text={t("new")} />
        <button className="text-tertiary-black50 h-[40px] w-[119px] rounded-xl bg-gray hover:text-tertiary">
          <div className="flex items-center justify-center">
            <span>Show All</span>
            <Iconfy className="text-md" icon={"ic:round-navigate-next"} />
          </div>
        </button>
      </div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
        {newData.length > 0 ? (
          newData.map((post, i) => (
            <PostCard
              key={post.id + i}
              post={post}
              type={EPostCardType.horizontal}
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
