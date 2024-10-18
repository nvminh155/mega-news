import { useTranslation } from "react-i18next";

import PaginationPost from "@/components/PaginationPost";
import { TitleSection } from "@/components/TitleSection";

import { DataWriter } from "./DataWriter";

export const PostCategory = ({
  category,
}: {
  category: "sport" | "trendy" | "top" | "popular";
}) => {
  const Data = DataWriter.posts;

  const { t: tInfo } = useTranslation("info");

  return (
    <div>
      <TitleSection
        text={tInfo("category") + " : " + tInfo(category as any)}
        className="flex justify-start text-lg"
      />
      <PaginationPost data={Data} />
    </div>
  );
};
