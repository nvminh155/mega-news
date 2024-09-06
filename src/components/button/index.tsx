import * as React from "react";
import { Button, ButtonProps } from "antd";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "flex items-center h-max justify-center rounded-md font-semibold focus-visible:!outline-none focus-visible:!shadow-none border-none",
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
          "!bg-[#f5f5f5] !text-tertiary/75 border-none pointer-events-none",
      },
      size: {
        default: "py-2 px-2",
        sm: "px-4 py-2",
        lg: "px-8 py-4",
        icon: "h-max w-max p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface AppButtonProps
  extends Omit<ButtonProps, "size">,
    VariantProps<typeof buttonVariants> {
  suffixIcon?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  disabledRing?: boolean;
}

const AppButton: React.FC<AppButtonProps> = ({
  className,
  disabled,
  variant,
  size,
  children,
  suffixIcon,
  prefixIcon,
  disabledRing = false,
  ...props
}) => {
  return (
    <Button
      className={cn(
        "gap-0 p-0 ring-0",
        buttonVariants({ variant, size, className })
      )}
      {...props}
    >
      {prefixIcon}
      {children}
      {suffixIcon}
    </Button>
  );
};

export default AppButton;
