import Container from "@/components/Container";
import ListPost from "@/components/ListPost";

import { SliderTag } from "./SliderTag";

const Home = () => {
  return (
    <Container>
      <SliderTag />
      <div className="posts flex flex-col">
        <ListPost title={"popular"} />
        <ListPost.News />
        <ListPost title={"trendy"} />
        <ListPost title={"top"} />
      </div>
    </Container>
  );
};

export default Home;
