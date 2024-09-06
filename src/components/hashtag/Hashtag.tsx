import { capitalizeTitle } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

import { ETags } from "./type";

const HashtagVariants = cva("rounded-[20px] overflow-hidden  bg-gray flex ", {
  variants: {
    status: {
      cover: "text-white max-w-[170px] max-h-[48px] bg-gray relative  ",
      split: "text-black  w-fit max-h-[48px] flex ",
    },
  },
  defaultVariants: {
    status: "cover",
  },
});

interface HashtagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof HashtagVariants> {
  title: ETags;
  imgSrc: string;
  className?: string;
}
const Hashtag: React.FC<HashtagProps> = ({
  title = ETags.FOOD,
  imgSrc,
  status = "cover",
  className,
}) => {
  return (
    <div className={cn(HashtagVariants({ status, className }))}>
      <img
        src={imgSrc}
        className={cn(
          status === "cover" && "relative w-full blur-sm",
          status === "split" && "h-[48px] w-[60px]",
          "object-cover"
        )}
      />

      <div
        className={cn(
          status == "cover" && "absolute bottom-0 left-0 right-0 top-0",
          status == "split" && "mx-1",
          "flex w-full items-center justify-center text-center text-sm font-bold"
        )}
      >
        #{capitalizeTitle(title)}
      </div>
    </div>
  );
};

export default Hashtag;
