import { cn } from "@/lib/cn";

export type TLabelInfomationProps = {
  className?: string;
  text?: string;
};

const LabelInfomation = ({ className, text }: TLabelInfomationProps) => {
  return (
    <span className={cn("content-center leading-[20px]", className)}>
      {text ? text + ":" : ""}
    </span>
  );
};

export default LabelInfomation;
