import { useEffect, useState } from "react";
import { postAPI } from "@/services";
import { TPost } from "@/types";

import Hashtag from "@/components/HashTag";

const Home = () => {
  const [post, setPost] = useState<TPost[]>();

  useEffect(() => {
    const fetchDetailPost = async () => {
      await postAPI.getPosts().then((res) => {
        console.log(res);
        setPost(res.data);
      });
    };

    fetchDetailPost();
  }, []);

  if (!post) return <div>Loading...</div>;
  return (
    <div className="flex space-x-md p-sm">
      {[...post, ...post, ...post].map((_, i) => (
        <Hashtag key={i + 1} title="food" imgSrc="/food01.jpg" />
      ))}
    </div>
  );
};

export default Home;
