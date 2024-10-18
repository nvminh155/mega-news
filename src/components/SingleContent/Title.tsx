import { cn } from "@/lib/cn";

import { ESingleContentType } from "./type";

const Title = ({ ...props }) => {
  return (
    <div className="absolute top-[323px] w-full">
      {props.type === ESingleContentType.normal ? (
        <div className="w-full rounded-b-[10px] px-sm">
          <div className="text-[25px] font-medium">{props.title}</div>
          <div className="text-[14px] text-tertiary/75">{props.comment}</div>
        </div>
      ) : (
        <div
          className={cn(
            "absolute left-[9px] h-[117px] max-w-full rounded-lg bg-white/75 px-sm",
            props.type === ESingleContentType.imgFull
              ? "w-[339px]"
              : "w-[724px]"
          )}
        >
          <div className="pt-[5px] text-[25px]">{props.title}</div>
          <div className="text-sm text-tertiary/75">{props.comment}</div>
        </div>
      )}
    </div>
  );
};

export default Title;
