import { cn } from "@/lib/cn";

import { ESize } from "./type";

interface LoadingBargProps extends React.ButtonHTMLAttributes<HTMLElement> {
  size: ESize | number;
  percent: number;
  containerClassname?: string;
  className?: string;
}
const LoadingBar: React.FC<LoadingBargProps> = ({
  size = ESize.Small,
  percent = 0,
  containerClassname,
  className,
}) => {
  const totalWidth =
    typeof size === "number" ? size : size === ESize.Small ? 320 : 540;

  return (
    <div
      className={cn("h-[15px] rounded-[20px] bg-gray", containerClassname)}
      style={{ width: `${totalWidth}px` }}
    >
      <div
        className={cn(
          `h-[15px] overflow-hidden rounded-[20px] bg-secondary`,
          className
        )}
        style={{ width: `${Math.min(percent, 100)}%` }}
      ></div>
    </div>
  );
};

export default LoadingBar;
