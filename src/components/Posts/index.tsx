import { useEffect, useState } from "react";
import { postAPI } from "@/services";
import { TPost } from "@/types";
import { Carousel } from "antd";

import PostCard from "@/components/PostCard";
import { EPostCardSize } from "@/components/PostCard/type";

interface PostProps {
  title?: string;
}

const Posts = ({ title }: PostProps) => {
  // Khai báo state để chứa danh sách bài viết
  const [postData, setPostData] = useState<TPost[]>([]);

  // Hàm lấy dữ liệu bài viết từ API
  const fetchDetailPost = async () => {
    try {
      const response = await postAPI.getPosts(); // Giả định API trả về { posts: [...] }
      setPostData(response.data); // Gán trực tiếp mảng posts từ response vào postData
      console.log(response.data); // Kiểm tra dữ liệu trả về từ API
    } catch (err) {
      console.log(err); // Xử lý lỗi nếu có
    }
  };

  // useEffect để gọi API khi component được mount
  useEffect(() => {
    fetchDetailPost();
  }, []);

  return (
    <div className="mt-20">
      {title && (
        <div className="flex h-[23px] w-[128px] items-center justify-evenly">
          <div className="m-1 h-[10px] w-[4px] rounded-lg bg-primary"></div>
          <span className="flex h-full w-[128px] items-center text-lg font-semibold">
            {title}
          </span>
        </div>
      )}
      <div>
        <Carousel arrows autoplay slidesToShow={4} dots={false}>
          {postData.length > 0 ? (
            postData.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                actions={{
                  viewers: ["1", "2"],
                  stars: ["1"],
                }}
                size={EPostCardSize.medium}
              />
            ))
          ) : (
            <div>Không có bài viết nào để hiển thị</div> // Thông báo khi không có bài viết
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default Posts;
