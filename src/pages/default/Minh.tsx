import { Pagination } from "antd";

import AppButton from "@/components/button";
import { Iconfy } from "@/components/Iconfy";
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
          return <CardSlider key={it.id} src="/Image-card.png" />;
        })}
        containerProps={{ className: "max-w-[754px] max-h-[452px]" }}
      />
      <Pagination
        rootClassName="*:!border-none"
        className="mt-5"
        total={500}
        pageSize={5}
        showLessItems={false}
        itemRender={(page, type) => {
          if (type === "jump-prev" || type === "jump-next")
            return <div>sakfj</div>;
          if (type === "next")
            return (
              <AppButton
                suffixIcon={<Iconfy icon={"radix-icons:caret-right"} />}
                className="pl-3 pr-2"
              >
                Next
              </AppButton>
            );
          if (type === "prev")
            return (
              <AppButton
                prefixIcon={<Iconfy icon={"radix-icons:caret-left"} />}
                className="pl-2 pr-3"
              >
                Prev
              </AppButton>
            );
          console.log(page, type);
          return (
            <div className="rounded-sm !border-none bg-accent-gray">{page}</div>
          );
        }}
      />
      <AppButton variant={"disabled"}>
        <div className="flex items-center">
          <span className="leading-tight">Next</span>
          <Iconfy icon={"radix-icons:caret-right"} size={"sm"} />
        </div>
      </AppButton>

      <AppButton className="flex w-max items-center bg-primary text-md">
        <span>tẽt</span>
        <Iconfy icon={"radix-icons:caret-right"} size={"sm"} />
      </AppButton>
    </div>
  );
};

export default Minh;
