import { Progress } from "antd";
import Container from "./Container";

const Loading = () => {
  return (
    <Container className="flex flex-1 h-full w-[520px] mx-auto items-center justify-center">
      <span className="block text-[40px] font-semibold text-secondary">
        MEGA.news
      </span>
      <Progress
        percent={40}
        success={{
          percent: 40,
          strokeColor: "hsla(var(--secondary))",
        }}
      />
    </Container>
  );
};

export default Loading;
