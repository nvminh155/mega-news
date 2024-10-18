import { useState } from "react";

import { cn } from "@/lib/cn";
import useDeviceType from "@/hooks/useDeviceType";

import { AppPagination } from "./Pagination";
import PostCard from "./PostCard";
import { EPostCardSize } from "./PostCard/type";

type TPaginationPostProps = {
  data: any;
  className?: string;
};

const PaginationPost = ({ data, className }: TPaginationPostProps) => {
  const { isMobile } = useDeviceType();
  const Source = [...data, ...data, ...data, ...data, ...data, ...data];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = Source.slice(startIndex, endIndex);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const calcItemOnRow = () => {
    let itemOnRow = 4;
    if (isMobile) {
      itemOnRow = 1;
    }

    return Array.from(
      { length: Math.ceil(currentData.length / itemOnRow) },
      (_, i) => currentData.slice(i * itemOnRow, i * itemOnRow + itemOnRow)
    );
  };

  return (
    <div className={cn("", className)}>
      <div className="flex flex-col gap-md">
        {calcItemOnRow().map((group, index) => (
          <div key={index + 1} className="flex justify-center gap-md">
            {group.map((item, idx) => (
              <PostCard post={item} key={idx + 1} size={EPostCardSize.medium} />
            ))}
          </div>
        ))}
      </div>

      <AppPagination
        rootClassName="justify-center"
        current={currentPage}
        pageSize={itemsPerPage}
        total={Source.length}
        onChangePage={handlePageChange}
        className="mt-4"
      />
    </div>
  );
};

export default PaginationPost;
