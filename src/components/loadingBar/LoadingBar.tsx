import { cn } from "@/lib/cn";

interface LoadingBargProps extends React.ButtonHTMLAttributes<HTMLElement> {
  size: "small" | "larg" | number;
  percent: number;
  classNameContainer?: string;
  className?: string;
}
const LoadingBar: React.FC<LoadingBargProps> = ({
  size = "small",
  percent = 0,
  classNameContainer,
  className,
}) => {
  const totalWidth =
    typeof size === "number" ? size : size === "small" ? 320 : 540;

  return (
    <div
      className={cn("h-[15px] rounded-[20px] bg-gray", classNameContainer)}
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
