import * as React from "react";
import { Button, ButtonProps } from "antd";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-semibold text-sm focus-visible:!outline-none focus-visible:!shadow-none",
  {
    variants: {
      variant: {
        default: "bg-primary/75 !text-white hover:!bg-primary",
        destructive: "",
        outline:
          "border-[1px] border-input text-primary/75 bg-transparent hover:!bg-primary/10 hover:!border-primary/10",
        secondary: "bg-secondary/75 !text-white hover:!bg-secondary ",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline !bg-transparent !border-none",
        disabled:
          "!bg-[#f5f5f5] !text-tertiary/75 cursor-not-allowed border-none",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2",
        lg: "px-8 py-4",
        icon: "h-max w-max p-2",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  }
);

export interface AppButtonProps
  extends Omit<ButtonProps, "size">,
    VariantProps<typeof buttonVariants> {
  suffixIcon?: React.ReactNode;
  disabledRing?: boolean;
}

const AppButton: React.FC<AppButtonProps> = ({
  className,
  disabled,
  variant,
  size,
  children,
  suffixIcon,
  disabledRing = false,
  ...props
}) => {
  return (
    <Button
      className={cn(
        buttonVariants({ variant, size, className }),
        !disabledRing && "focus-visible:ring-2"
      )}
      {...props}
    >
      {children}
      {suffixIcon}
    </Button>
  );
};

export default AppButton;
