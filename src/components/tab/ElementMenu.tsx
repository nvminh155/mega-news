import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

import { Iconfy } from "../Iconfy";

const ElementMenuVariants = cva(
  " items-center flex justify-center text-center",
  {
    variants: {
      status: {
        MegaMenItem: "text-[16px] font-bold",
        MenItemSub: "text-[13px] hover:text-primary",
        MenItemIcon: "text-[13px] hover:text-primary gap-[6px]",
        FooterMenItem: "text-[12px] hover:text-primary",
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
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ElementMenuVariants> {
  className?: string;
  text: string;
}

export const ElementMenu: React.FC<ElementMenuProps> = ({
  className,
  size = "default",
  text,
  status,
}) => {
  return (
    <div className={cn(ElementMenuVariants({ status, size, className }))}>
      {status === "MegaMenItem" && (
        <Iconfy
          icon="pepicons-pop:line-y"
          className="items-center text-primary"
        />
      )}
      {status === "MenItemIcon" && (
        <Iconfy icon="lucide:smile" className="items-center" />
      )}
      {text}
    </div>
  );
};
