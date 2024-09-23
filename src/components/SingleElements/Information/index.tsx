import { cn } from "@/lib/cn";
import { Iconfy } from "@/components/Iconfy";

type TInformation = {
  icon?: string;
  data: any;
  label?: string;
  className?: string;
};

const Information: React.FC<TInformation> = ({
  data,
  label,
  icon,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-1 text-sm font-medium text-tertiary/75",
        className
      )}
    >
      {icon && <Iconfy icon={icon} size={"md"} />}
      <div className="flex items-center gap-1 font-medium mt-0.5">
        <span className="content-center leading-[20px]">{label + ":"} </span>
        <span>{data}</span>
      </div>
    </div>
  );
};

export default Information;
