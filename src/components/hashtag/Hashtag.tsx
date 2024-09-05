import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const HashtagVariants = cva("rounded-[20px] overflow-hidden  bg-gray flex ", {
  variants: {
    status: {
      cover: "text-white max-w-[170px] max-h-[48px] bg-gray relative  ",
      split: "text-black max-w-[132px] max-h-[48px] flex ",
    },
  },
  defaultVariants: {
    status: "cover",
  },
});

interface HashtagProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof HashtagVariants> {
  title: string;
  srcimg: string;
  className?: string;
}
const Hashtag: React.FC<HashtagProps> = ({
  title = "title",
  srcimg,
  status = "cover",
  className,
}) => {
  console.log(status);
  return (
    <div className={cn(HashtagVariants({ status, className }))}>
      <img
        src={srcimg}
        className={cn(
          status === "cover" && "relative w-full blur-sm",
          status === "split" && "h-[48px] w-[60px]",
          "object-cover object-center"
        )}
      />

      <div
        className={cn(
          status == "cover" && "absolute bottom-0 left-0 right-0 top-0",
          "z-10 flex w-full items-center justify-center text-center text-sm font-bold"
        )}
      >
        #{title}
      </div>
    </div>
  );
};

export default Hashtag;
