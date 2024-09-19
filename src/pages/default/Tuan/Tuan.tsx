import Posts from "@/components/Post";

import NewPost from "@/components/Post/NewPost";

const Tuan = () => {
  return (
    <div className="mt-5">
      <div>
        <NewPost />
        <Posts title={"popular"} />
        <Posts title={"trendy"} />
        <Posts title={"top"} />
        <Posts title={"your"} />
        <Posts title={"related"} />
      </div>
    </div>
  );
};

export default Tuan;
