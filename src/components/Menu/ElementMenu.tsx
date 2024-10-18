import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const ElementMenuVariants = cva(
  "items-center text-xs flex justify-center text-center cursor-pointer",
  {
    variants: {
      type: {
        itemSub: "hover:text-primary font-medium",
        itemSubIcon: "hover:text-primary font-medium gap-[6px]",
        normal: "hover:text-primary",
      },
      size: {
        default: "px-6 py-3",
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

interface ElementMenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ElementMenuVariants> {
  className?: string;
  icon?: React.ReactNode;
  text: string;
}
export const ElementMenu: React.FC<ElementMenuProps> = ({
  className,
  size = "default",
  text,
  icon,
  type,
}) => {
  return (
    <div className={cn(ElementMenuVariants({ type, size, className }))}>
      {type === "itemSubIcon" && icon}
      <span>{text}</span>
    </div>
  );
};
