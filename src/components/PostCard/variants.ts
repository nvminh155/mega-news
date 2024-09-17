import { cva } from "class-variance-authority";

const imageVariants = cva("w-full", {
  variants: {
    imageClassName: {
      "vertical-lg": "h-[327px]",
      "vertical-md": "h-[190px]",
      "horizontal-lg": "h-[190px] max-w-[340px]",
      "horizontal-md": "h-[190px] max-w-[190px]",
      "widget-lg": "h-[87px] max-w-[87px]",
    },
  },
  defaultVariants: {
    imageClassName: "vertical-lg",
  },
});

const postCardVariants = cva("w-full", {
  variants: {
    postCardWidth: {
      "vertical-lg": "w-[488px]",
      "vertical-md": "max-w-[360px]",
      "horizontal-lg": "w-[744px]",
      "horizontal-md": "w-[488px]",
      "widget-lg": "w-[320px]",
    },
  },
  defaultVariants: {
    postCardWidth: "vertical-lg",
  },
});

export { imageVariants, postCardVariants };
