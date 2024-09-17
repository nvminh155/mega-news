import React, { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";

export enum EDirection {
  ROW,
  COL,
}

type ContainerProps = PropsWithChildren & {
  direction?: EDirection;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Container({
  direction = EDirection.COL,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-sm",
        direction === EDirection.COL && "flex-col items-stretch",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
