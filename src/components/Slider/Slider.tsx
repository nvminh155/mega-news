import React, { useRef } from "react";
import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

import { Iconfy, IconfyProps } from "../Iconfy";

const dotsVariants = cva("absolute flex gap-2 justify-center items-center", {
  variants: {
    dotPosition: {
      "bottom-right": "bottom-[19px] right-[24px] z-10 ",
      "bottom-left": "bottom-0 left-0",
      "top-right": "top-0 right-0 ",
      "top-left": "top-0 left-0",
      default: "bottom-[19px] right-[24px] z-10",
    },
    size: {
      default: "*:h-3 *:w-3",
    },
  },
  defaultVariants: {
    dotPosition: "default",
    size: "default",
  },
});

type SliderDotsProps = {
  amount: number;
  currentDot?: number;
  className?: string;
} & VariantProps<typeof dotsVariants>;

const SliderDots: React.FC<SliderDotsProps> = ({
  dotPosition,
  size,
  currentDot = 1,
  className,
  amount,
}) => {
  return (
    <div className={dotsVariants({ dotPosition, size, className })}>
      {Array.from({ length: amount }).map((_, i) => (
        <div key={i} className={cn("min-w-max")}>
          <button
            className={cn("block h-full w-full rounded-full bg-[#f5f5f5]/80", {
              "bg-white !px-3": i + 1 === currentDot,
            })}
          ></button>
        </div>
      ))}
    </div>
  );
};

const arrowVariants = cva("absolute cursor-pointer", {
  variants: {
    next: {
      horizontal: "left-aut1o right-[12px]",
      vertical: "bottom-[12px]",
    },
    prev: {
      horizontal: "left-[12px]",
      vertical: "top-[12px]",
    },
    orientation: {
      horizontal: "bottom-1/2 translate-y-1/2",
      vertical: "left-1/2 -translate-x-1/2",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

type SliderArrowProps = Partial<IconfyProps> & {
  type?: "next" | "prev";
} & VariantProps<typeof arrowVariants>;

const SliderArrow: React.FC<SliderArrowProps> = ({
  onClick,
  type,
  size,
  orientation = ESliderOrientation.horizontal,
  className,
  ...props
}) => {
  const iconHorizontal = type === "next" ? "fe:arrow-right" : "fe:arrow-left";
  const iconVertical = type === "next" ? "fe:arrow-down" : "fe:arrow-up";
  const icon = orientation === "horizontal" ? iconHorizontal : iconVertical;

  const variantNext = type === "next" ? orientation : undefined;
  const variantPrev = type === "prev" ? orientation : undefined;

  return (
    <Iconfy
      icon={icon}
      size={size}
      background
      containerProps={{
        className: arrowVariants({
          next: variantNext,
          prev: variantPrev,
          orientation,
        }),
      }}
      onClick={onClick}
      {...props}
    />
  );
};

export enum ESliderOrientation {
  horizontal = "horizontal",
  vertical = "vertical",
}

type SliderProps = {
  dotProps: Omit<SliderDotsProps, "amount">;
  arrowsProps?: SliderArrowProps;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  items?: React.ReactNode[];
  orientation?: ESliderOrientation;
};

const Slider: React.FC<SliderProps> = ({
  dotProps,
  arrowsProps,
  containerProps,
  orientation = ESliderOrientation.horizontal,
  items,
}) => {
  const ref = useRef<CarouselRef>(null);
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const totalSlides = items?.length ?? 0;

  return (
    <div className={cn("relative h-max", containerProps?.className)}>
      <Carousel
        dots={false}
        ref={ref}
        dotPosition={orientation === "horizontal" ? "bottom" : "right"}
      >
        {items}
      </Carousel>

      <SliderArrow
        onClick={() => {
          ref.current?.next();
          setCurrentSlide((prev) => (prev + 1 > totalSlides ? 1 : prev + 1));
        }}
        type="next"
        orientation={orientation}
        {...arrowsProps}
      />

      <SliderArrow
        onClick={() => {
          console.log(ref.current);
          ref.current?.prev();
          setCurrentSlide((prev) => (prev - 1 === 0 ? totalSlides : prev - 1));
        }}
        type="prev"
        orientation={orientation}
        {...arrowsProps}
      />

      <SliderDots
        amount={totalSlides}
        currentDot={currentSlide}
        dotPosition={dotProps.dotPosition}
      />
    </div>
  );
};

export default Slider;
