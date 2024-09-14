import { useEffect, useState } from "react";
import { TPost } from "@/types";

import PostCard from "../PostCard";
import { EPostCardType } from "../PostCard/type";
import { TitleSection } from "../TitleSection";
import { topPostsData } from "./data";

const TopPosts: React.FC = () => {
  const [topPosts, setTopPosts] = useState<TPost[]>([]);

  const fetchTopPosts = async () => {
    try {
      // await postAPI.getPosts(5).then((res) => {
      //   setTopPosts(res);
      // });
      setTopPosts(topPostsData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTopPosts();
  }, []);
  return (
    <div className="rounded-md bg-gray px-4 py-5">
      <TitleSection
        text="Top Post"
        className="flex items-center justify-start p-0 pb-4 text-lg"
      />
      <div className="flex flex-col gap-5">
        {topPosts.map((post) => (
          <PostCard key={post.id} post={post} type={EPostCardType.widget} />
        ))}
      </div>
    </div>
  );
};

export default TopPosts;
