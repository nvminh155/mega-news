import { capitalizeTitle } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const HashtagVariants = cva(
  "rounded-[20px] max-h-[48px] overflow-hidden bg-accent-gray flex cursor-pointer",
  {
    variants: {
      status: {
        cover: "text-white w-[170px] bg-accent-gray relative  ",
        split: "text-black  w-fit flex ",
      },
    },
    defaultVariants: {
      status: "cover",
    },
  }
);

interface HashtagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof HashtagVariants> {
  title: string;
  imgSrc: string;
  className?: string;
}
const Hashtag: React.FC<HashtagProps> = ({
  title = "food",
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
        alt="background"
      />

      <div
        className={cn(
          "px-1",
          status == "cover" && "absolute bottom-0 left-0 right-0 top-0",
          status == "split" && "mx-1 text-tertiary",
          "flex w-full items-center justify-center text-sm font-medium"
        )}
      >
        #{capitalizeTitle(title)}
      </div>
    </div>
  );
};

export default Hashtag;
