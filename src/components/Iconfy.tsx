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
    variant: {
      primary: "text-primary",
      tertiary: "text-tertiary hover:text-primary",
    },
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
    bg: {
      no: "bg-transparent rounded-none",
      sm: "p-2 rounded-md",
      md: "p-3 rounded-md",
      lg: "p-4 rounded-md",
    },
  },
  defaultVariants: {
    // variant: "primary",
    size: "md",
  },
});

export interface IconfyProps
  extends Omit<IconifyIconProps, "size" | "ref">,
    VariantProps<typeof iconVariants> {
  background?: boolean;
}

const Iconfy = React.forwardRef<IconifyIconHTMLElement, IconfyProps>(
  ({ className, variant, size, background = false, icon, ...props }, ref) => {
    return (
      <Icon
        icon={icon}
        ref={ref}
        height="none"
        className={cn(
          { "bg-[#f5f5f5": background },
          iconVariants({
            variant,
            size,
            className,
            bg: size,
          })
        )}
        {...props}
      />
    );
  }
);

Iconfy.displayName = "Iconfy";

export { Iconfy, iconVariants };
