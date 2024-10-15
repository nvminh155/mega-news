import { useTranslation } from "react-i18next";

import ListPost from "@/components/ListPost";
import Satisfaction from "@/components/Satisfaction";
import { TitleSection } from "@/components/TitleSection";

import { categories, years } from "../..//profile/ViewPostChart/data";
import ViewPostChart from "../ViewPostChart";

const YourPost = () => {
  const { t } = useTranslation("posts");

  return (
    <div>
      <div className="flex gap-md max-desktop:flex-col">
        <div className="flex-1">
          <TitleSection text={t("View Posts")} />
          <ViewPostChart categories={categories} years={years} />,
        </div>
        <div>
          <TitleSection text={t("Satisfaction")} />
          <div className="grid grid-cols-3 gap-md rounded-md bg-accent-gray bg-white p-sm max-desktop:grid-cols-5">
            {Array.from({ length: 9 }).map((_, index) => (
              <Satisfaction key={index + 1} />
            ))}
          </div>
        </div>
      </div>
      <ListPost title="your" />
    </div>
  );
};

export default YourPost;
