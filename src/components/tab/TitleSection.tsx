import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

import { Iconfy } from "../Iconfy";

const TitleSectionVariants = cva(
  "flex items-center justify-center text-center",
  {
    variants: {
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

interface TitleSectionProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof TitleSectionVariants> {
  className?: string;
  status?: "default" | "dot" | "simple" | "line";
  text: string;
}

export const TitleSection: React.FC<TitleSectionProps> = ({
  className,
  text,
  status = "default",
  size = "default",
}) => {
  return (
    <div className={cn(TitleSectionVariants({ size, className }))}>
      {status === "default" ? (
        <Iconfy
          icon="pepicons-pop:line-y"
          className="items-center text-primary"
        />
      ) : (
        status === "dot" && (
          <Iconfy icon="mdi:dot" className="items-center text-primary" />
        )
      )}
      {text}
    </div>
  );
};
