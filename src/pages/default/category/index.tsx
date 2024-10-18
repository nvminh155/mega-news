import { useParams } from "react-router-dom";

import TopCategory from "@/components/Category/TopCategory";

import { PostCategory } from "./Posts";

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div>
      <TopCategory />
      <PostCategory category={id as any} />
    </div>
  );
};

export default CategoryPage;
