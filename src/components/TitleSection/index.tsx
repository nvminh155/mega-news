import React, { PropsWithChildren } from "react";

import { cn } from "@/lib/cn";

export enum ETitleSectionStatus {
  DEFAULT,
  DOT,
  SIMPLE,
  LINE,
}

export interface TitleSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  status?: ETitleSectionStatus;
  text: string;
  containerClassName?: string;
}

type TTitleSectionPrefixProps = {
  type?: ETitleSectionStatus;
};
const TitleSectionPrefix: React.FC<TTitleSectionPrefixProps> = ({ type }) => {
  return (
    <div
      className={cn(
        "hidden",
        type === ETitleSectionStatus.DEFAULT &&
          "block h-[10px] w-[4px] rounded-md bg-primary",
        type === ETitleSectionStatus.DOT &&
          "block h-[4px] w-[4px] rounded-full bg-primary"
      )}
    ></div>
  );
};

export const TitleSection: React.FC<TitleSectionProps & PropsWithChildren> = ({
  className,
  text,
  status = ETitleSectionStatus.DEFAULT,
  containerClassName,
  children,
}) => {
  return (
    <div className={containerClassName}>
      <div
        className={cn(
          "mb-md flex items-center gap-[6px] text-center font-semibold text-tertiary",
          className
        )}
      >
        <TitleSectionPrefix type={status} />
        {text}
      </div>
      <div className="pl-[10px] text-tertiary/75">{children}</div>
    </div>
  );
};
