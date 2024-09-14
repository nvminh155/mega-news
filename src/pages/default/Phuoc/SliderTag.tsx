import { useEffect, useRef, useState } from "react";
// import { categoryAPI } from "@/services";
import { TCategory } from "@/types";
import { Carousel } from "antd";

import "./SliderTag.css";

import Hashtag from "@/components/HashTag";

import { NextArrow, PrevArrow } from "./CustomArrowAnt";

const data = {
  categories: [
    {
      id: "category1",
      name: "Food",
    },
    {
      id: "category2",
      name: "Animal",
    },
    {
      id: "category3",
      name: "City",
    },
    {
      id: "category4",
      name: "Map",
    },
    {
      id: "category5",
      name: "Weather",
    },
    {
      id: "category6",
      name: "Dance",
    },
    {
      id: "category7",
      name: "Avatar",
    },
    {
      id: "category8",
      name: "Team",
    },
    {
      id: "category9",
      name: "Abstract",
    },
    {
      id: "category10",
      name: "Music",
    },
    {
      id: "category11",
      name: "Sport",
    },
    {
      id: "category12",
      name: "Technology",
    },
    {
      id: "category13",
      name: "Car",
    },
  ],
};
export const SliderTag = () => {
  const [categories, setCategories] = useState<TCategory[]>();
  const divRef = useRef<HTMLDivElement>(null);

  const [numberCategory, setNumberCategory] = useState<number>(
    Math.floor(
      ((window.innerWidth > 1500 ? 1500 : window.innerWidth) - 100) / (170 + 24)
    )
  );

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        const divWidth = divRef.current.offsetWidth;
        setNumberCategory(Math.floor((divWidth - 60) / (170 + 24)));
        console.log(divWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [divRef.current]);

  const settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  useEffect(() => {
    const fetchDetailCategorys = async () => {
      // await categoryAPI.getcategories().then((res) => {
      //   if (res.success) setCategories(res.data);
      // });
      setCategories(data.categories);
    };
    fetchDetailCategorys();
  }, []);
  if (!categories) return <div>Loading...</div>;
  return (
    <div className="SliderTag overflow-hidden" ref={divRef}>
      <Carousel
        arrows
        {...settings}
        dots={false}
        slidesToShow={numberCategory}
        autoplay={false}
        draggable
        infinite={false}
        className="flex bg-accent-gray desktop:p-sm"
      >
        {categories.map((category, i) => (
          <Hashtag
            key={i + 1}
            title={category.name}
            imgSrc="/food01.jpg"
            className="desktop:w-[170px]"
          />
        ))}
      </Carousel>
    </div>
  );
};
