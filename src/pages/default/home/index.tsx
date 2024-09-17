import Container from "@/components/Container";

import { SliderTag } from "./SliderTag";
import Posts from "@/components/Post";

const Home = () => {
  return (
    <Container>
      <SliderTag />
      <div className="posts flex flex-col">
        <Posts title={"popular"} />
        <Posts title={"trendy"} />
        <Posts title={"top"} />
        <Posts title={"your"} />
      </div>
    </Container>
  );
};

export default Home;
