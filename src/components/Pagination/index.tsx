import React, { useState } from "react";
import { Pagination, PaginationProps } from "antd";

import { cn } from "@/lib/cn";

import AppButton from "../Button";
import { Iconfy } from "../Iconfy";

type AppPaginationProps = {
  onChangePage?: (page: number) => void;
} & PaginationProps;

export const AppPagination = ({
  onChangePage,
  rootClassName,
  className,
  ...props
}: AppPaginationProps) => {
  const [current, setCurrent] = useState(1);

  return (
    <Pagination
      rootClassName={cn(
        "*:!border-none *:!rounded-sm !h-max flex items-center",
        rootClassName
      )}
      onChange={(page) => {
        if (onChangePage) onChangePage(page);
        setCurrent(page);
      }}
      className={cn("11 mt-5", className)}
      showLessItems={false}
      defaultPageSize={5}
      defaultCurrent={1}
      itemRender={(page, type, El) => {
        if (type === "jump-prev" || type === "jump-next") return El;
        if (type === "next") return <PaginationNext />;
        if (type === "prev") return <PaginationPrev />;

        return (
          <div
            className={cn(
              "flex h-full items-center justify-center px-1 font-medium text-tertiary",
              current === page && "rounded-sm bg-accent-gray"
            )}
          >
            {page}
          </div>
        );
      }}
      {...props}
    />
  );
};

export const PaginationPrev = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <AppButton
      prefixIcon={<Iconfy icon={"radix-icons:caret-left"} />}
      className="py-1 pl-2 pr-3"
      {...props}
    >
      Prev
    </AppButton>
  );
};

export const PaginationNext = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <AppButton
      suffixIcon={<Iconfy icon={"radix-icons:caret-right"} />}
      className="py-1 pl-3 pr-2"
      {...props}
    >
      Next
    </AppButton>
  );
};
