import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { AppPagination } from "@/components/Pagination";
import PostCard from "@/components/PostCard";
import { EPostCardSize } from "@/components/PostCard/type";
import { TitleSection } from "@/components/TitleSection";

import { DataWriter } from "./DataWriter";

interface LatestPostsProps {
  authorId: string;
}

export const LatestPosts: React.FC<LatestPostsProps> = ({ authorId }) => {
  console.log(authorId);
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
  const itemsPerPage = 16;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = Source.slice(startIndex, endIndex);
  const chunkedData = Array.from(
    { length: Math.ceil(currentData.length / 4) },
    (_, i) => currentData.slice(i * 4, i * 4 + 4)
  );
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <TitleSection
        text={t("LastestPosts")}
        className="flex justify-start text-lg"
      />
      <div className="flex flex-col gap-md">
        {chunkedData.map((group, index) => (
          <div key={index} className="flex justify-center gap-md">
            {group.map((item, idx) => (
              <PostCard post={item} key={idx} size={EPostCardSize.medium} />
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
