import { useEffect, useRef, useState } from "react";

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
  const divRef = useRef<HTMLDivElement>(null);

  const [numberPosts, setNumberPosts] = useState<number>(
    Math.floor((window.innerWidth > 1512 ? 1512 : window.innerWidth) / 360)
  );

  useEffect(() => {
    const handleResize = () => {
      if (divRef.current) {
        const divWidth = divRef.current.offsetWidth;
        setNumberPosts(Math.floor(divWidth / 360));
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [divRef.current]);
  console.log(numberPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = numberPosts * 4;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = Source.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <TitleSection
        text="Latest Posts"
        className="flex justify-start text-lg"
      />
      <div className="flex flex-wrap gap-y-6" ref={divRef}>
        {currentData.map((item, i) => (
          <div key={i} className="flex-1">
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
