import React from "react";

import { cn } from "@/lib/cn";

type TAppLabelProps = {
  text?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

const AppLabel = ({ text, className }: TAppLabelProps) => {
  return (
    <span className={cn("font-medium text-tertiary", className)}>{text}</span>
  );
};

export default AppLabel;
