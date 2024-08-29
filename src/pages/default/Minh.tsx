import CardSlider from "@/components/slider/CardSlider";
import Slider from "@/components/slider/Slider";

const Minh = () => {
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
    <div>
      <Slider
        dotProps={{ dotPosition: "bottom-right" }}
        orientation="horizontal"
        items={list.map((it) => {
          return <CardSlider key={it.id} />;
        })}
        containerProps={{ className: "max-w-[754px] max-h-[452px]" }}
      />
    </div>
  );
};

export default Minh;
