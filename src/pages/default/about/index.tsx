import Explanation from "./Explanation";
import postData from "./explanationData.json";
import Team from "./Team";

const About = () => {
  const post = postData;

  return (
    <div className="">
      <Explanation
        title={post.title}
        content={post.content}
        imageUrl={post.imageUrl}
        alt={post.alt}
      />

      <Team />
    </div>
  );
};

export default About;
