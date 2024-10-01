import Container from "@/components/Container";
import ListPost from "@/components/ListPost";
import ContentCart from "@/components/SingleContent";
import { ESingleContentType } from "@/components/SingleContent/type";
import CardSlider from "@/components/Slider/CardSlider";
import Slider from "@/components/Slider/Slider";
import SingleContent from "@/components/test";

import { SliderTag } from "./SliderTag";

const Home = () => {
  const list = [
    {
      id: 1,
      name: "Minh1",
      age: 22,
    },
    {
      id: 2,
      name: "Minh2",
      age: 22,
    },
    {
      id: 3,
      name: "Minh3",
      age: 22,
    },
    {
      id: 4,
      name: "Minh4",
      age: 22,
    },
  ];

  return (
    <div className="flex flex-col">
      <SliderTag />

      <div className="my-6 flex items-center gap-md max-desktop:justify-center">
        <div className="flex flex-1 gap-md max-desktop:hidden">
          <SingleContent title="Title" content="content1" />
          <SingleContent title="Title2" content="content2" />
        </div>
        <div className="max-w-[650px] flex-1 max-desktop:max-w-full">
          <Slider
            dotProps={{ dotPosition: "bottom-right" }}
            items={list.map((it) => {
              return <CardSlider key={it.id} srcImg="/Image-card.png" />;
            })}
            containerProps={{
              className: " max-h-[452px] ",
            }}
          />
        </div>
      </div>
      <div className="flex"></div>
      <div className="posts flex w-full flex-col">
        <ListPost title={"popular"} />
        <ListPost.News />
        <ListPost title={"trendy"} />
        <ListPost title={"top"} />
      </div>
    </div>
  );
};

export default Home;
