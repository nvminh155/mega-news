import React, { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";

enum EDirection {
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
        "flex",
        direction === EDirection.COL && "flex-col",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
