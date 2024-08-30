import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

import { Iconfy } from "../Iconfy";

const TabItemVariants = cva(
  "ml-[6px] max-h-[39px] items-center flex justify-center text-[16px] text-center",
  {
    variants: {
      size: {
        default: "py-[10px] px-[20px]",
        sm: "px-4 py-2",
        lg: "px-8 py-4",
        icon: "h-max w-max p-2",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface ITabItemProps
  extends React.ButtonHTMLAttributes<HTMLElement>,
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
}) => {
  return (
    <div
      className={cn(
        status === "enabled" && "rounded-[12px] bg-gray",
        TabItemVariants({ size, className })
      )}
    >
      {status === "enabled" && (
        <Iconfy icon="mdi:dot" className="items-center text-primary" />
      )}
      {text}
    </div>
  );
};
