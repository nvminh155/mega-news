import { useState } from "react";
import { useTranslation } from "react-i18next";

import { AppPagination } from "@/components/Pagination";
import PostCard from "@/components/PostCard";
import { EPostCardSize } from "@/components/PostCard/type";
import { TitleSection } from "@/components/TitleSection";

import { DataWriter } from "./DataWriter";

export const LatestPosts = () => {
  const Data = DataWriter.posts;
  const Source = [
    ...Data,
    ...Data,
    ...Data,
    ...Data,
    ...Data,
    ...Data,
    ...Data,
    ...Data,
    ...Data,
    ...Data,
    ...Data,
  ];
  const { t } = useTranslation("posts");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4 * 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = Source.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <TitleSection
        text={t("LastestPosts")}
        className="flex justify-start text-lg"
      />
      <div className="flex flex-wrap gap-md">
        {currentData.map((item, i) => (
          <div key={i} className="min-w-[350px] flex-1">
            <center>
              <PostCard post={item} size={EPostCardSize.medium} />
            </center>
          </div>
        ))}
      </div>

      <AppPagination
        current={currentPage}
        pageSize={itemsPerPage}
        total={Source.length}
        onChangePage={handlePageChange}
        className="mt-4"
      />
    </div>
  );
};
