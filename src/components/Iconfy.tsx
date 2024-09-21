import * as React from "react";
import {
  Icon,
  IconifyIconHTMLElement,
  IconifyIconProps,
} from "@iconify-icon/react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const iconVariants = cva("inline-flex", {
  variants: {
    variant: {},
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-12 w-12",
    },
    bg: {
      no: "",
      sm: "rounded-xs",
      md: "rounded-sm",
      lg: "rounded-md",
      xl: "rounded-lg"
    },
  },
  defaultVariants: {
    // variant: "primary",
    bg: "no",
    size: "md",
  },
});

export interface IconfyProps
  extends Omit<IconifyIconProps, "size" | "ref">,
    VariantProps<typeof iconVariants> {
  background?: boolean;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

const Iconfy = React.forwardRef<IconifyIconHTMLElement, IconfyProps>(
  (
    {
      className,
      variant,
      size = "md",
      background = false,
      icon,
      containerProps,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "flex h-max w-max items-center justify-center",
          {
            "rounded-md !bg-[#f5f5f5] p-2": background,
          },
          containerProps?.className
        )}
      >
        <Icon
          icon={icon}
          ref={ref}
          height="none"
          className={cn(
            iconVariants({
              variant,
              size,
              className,
              bg: background ? size : "no",
            })
          )}
          {...props}
        />
      </div>
    );
  }
);

Iconfy.displayName = "Iconfy";

export { Iconfy, iconVariants };
