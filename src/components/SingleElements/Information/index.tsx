import { cn } from "@/lib/cn";
import { Iconfy } from "@/components/Iconfy";

import LabelInfomation, { TLabelInfomationProps } from "./LabelInfomation";

type TInformation = {
  icon?: string;
  data: any;
  labelProps?: TLabelInfomationProps;
  className?: string;
};

const Information: React.FC<TInformation> = ({
  data,
  labelProps,
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
      <div className="mt-0.5 flex items-center gap-1 font-medium">
        <LabelInfomation {...labelProps} />
        <span>{data}</span>
      </div>
    </div>
  );
};

export default Information;
