import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { Iconfy } from "../Iconfy";

const TabItemVariants = cva(
  "ml-[6px] max-h-[39px] rounded-md w-max cursor-pointer select-none items-center flex justify-center text-center",
  {
    variants: {
      size: {
        default: "py-sm px-[20px]",
        sm: "px-4 py-2",
        lg: "px-8 py-4",
        icon: "h-max w-max p-2",
      },
      status: {
        enabled: "bg-accent-gray",
        disabled: "hover:bg-accent-gray",
      },
    },
    defaultVariants: {
      size: "default",
      status: "disabled",
    },
  }
);

interface ITabItemProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof TabItemVariants> {
  className?: string;
  text: string;
  status: "enabled" | "disabled";
}

export const TabItem: React.FC<ITabItemProps> = ({
  className,
  status = "enabled",
  size = "default",
  text,
  ...props
}) => {
  return (
    <div className={TabItemVariants({ size, status, className })} {...props}>
      {status === "enabled" && (
        <Iconfy icon="mdi:dot" className="items-center text-primary" />
      )}
      {text}
    </div>
  );
};
