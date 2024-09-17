import Container from "@/components/Container";

import Posts from "./Post";
import { SliderTag } from "./SliderTag";

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
