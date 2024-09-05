import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const HashtagVariants = cva("rounded-[20px] overflow-hidden  bg-gray flex ", {
  variants: {
    status: {
      default: "text-white max-w-[170px] max-h-[48px] bg-gray relative  ",
      variant2: "text-black max-w-[132px] max-h-[48px] flex ",
    },
  },
  defaultVariants: {
    status: "default",
  },
});

interface HashtagProps
  extends React.ButtonHTMLAttributes<HTMLElement>,
    VariantProps<typeof HashtagVariants> {
  title: string;
  srcImage: string;

  status?: "default" | "variant2";
  className?: string;
}
const Hashtag: React.FC<HashtagProps> = ({
  title = "title",
  srcImage,
  status = "default",

  className,
}) => {
  return (
    <div className={cn(HashtagVariants({ status, className }))}>
      <img
        src={srcImage}
        className={cn(
          status == "default" &&
            "relative w-full object-cover object-center blur-sm",
          status == "variant2" && "h-[48px] w-[60px]",

          `bg-[url('${srcImage}')] bg-cover bg-center`
        )}
        alt="Centered Image"
      />

      <div
        className={cn(
          status == "default" && "absolute bottom-0 left-0 right-0 top-0",
          "flex w-full items-center justify-center text-center text-sm font-bold"
        )}
      >
        #{title}
      </div>
    </div>
  );
};

export default Hashtag;
