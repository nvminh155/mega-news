import Posts from "@/components/Post";

const Tuan = () => {
  return (
    <div>
      <div>
        <Posts title={"popular"} />
        <Posts title={"trendy"} />
        <Posts title={"top"} />
        <Posts title={"your"} />
      </div>
    </div>
  );
};

export default Tuan;
