import { useEffect, useRef, useState } from "react";
import { categoryAPI } from "@/services";
import { TCategory } from "@/types";
import { ButtonProps, Carousel } from "antd";

import "./SliderTag.css";

import Hashtag from "@/components/HashTag";
import { Iconfy } from "@/components/Iconfy";

export const SliderTag = () => {
  const [categories, setCategories] = useState<TCategory[]>();
  const divRef = useRef<HTMLDivElement>(null);
  const [numberCategory, setNumberCategory] = useState<number>(
    Math.floor(window.innerWidth / (170 + 24))
  );
  const SamplePrevArrow = (props: ButtonProps) => {
    const { className, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <Iconfy
          icon="ooui:previous-ltr"
          className="icon font-bold text-black"
        />
      </div>
    );
  };

  function SampleNextArrow(props: ButtonProps) {
    const { className, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <Iconfy icon="ooui:next-ltr" className="icon font-bold text-black" />
      </div>
    );
  }

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        const divWidth = divRef.current.offsetWidth;

        setNumberCategory(Math.floor(divWidth / (170 + 24)));
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [divRef.current]);

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  useEffect(() => {
    const fetchDetailCategorys = async () => {
      await categoryAPI.getcategories().then((res) => {
        if (res.success) setCategories(res.data);
      });
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
        {[
          ...categories,
          ...categories,
          ...categories,
          ...categories,
          ...categories,
        ].map((category, i) => (
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
