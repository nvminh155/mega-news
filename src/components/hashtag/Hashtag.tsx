import { ETags } from "@/types";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const HashtagVariants = cva("rounded-[20px] overflow-hidden  bg-gray flex ", {
  variants: {
    status: {
      cover: "text-white max-w-[170px] max-h-[48px] bg-gray relative  ",
      split: "text-black max-w-[150px] max-h-[48px] flex ",
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
  function capitalizeTitle(title: string): string {
    return title
      .toLowerCase() // Chuyển toàn bộ chuỗi thành chữ thường
      .split(" ") // Tách các từ trong chuỗi thành mảng
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Viết hoa chữ cái đầu của mỗi từ
      .join(" "); // Ghép lại thành chuỗi
  }

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
          "z-10 flex w-full items-center justify-center text-center text-sm font-bold"
        )}
      >
        #{capitalizeTitle(title)}
      </div>
    </div>
  );
};

export default Hashtag;
