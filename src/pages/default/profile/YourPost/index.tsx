import { useTranslation } from "react-i18next";

import useDeviceType from "@/hooks/useDeviceType";
import ListPost from "@/components/ListPost";
import Satisfaction from "@/components/Satisfaction";
import { TitleSection } from "@/components/TitleSection";

import { categories, years } from "../..//profile/ViewPostChart/data";
import ViewPostChart from "../ViewPostChart";

const YourPost = () => {
  const { t } = useTranslation("posts");
  const { isTablet, isSemiTablet } = useDeviceType();
  return (
    <div>
      <div className="flex gap-md max-desktop:flex-col">
        <div className="flex-1">
          <TitleSection text={t("View Posts")} />
          <ViewPostChart categories={categories} years={years} />,
        </div>
        <div>
          <TitleSection text={t("Satisfaction")} />
          <div className="grid gap-sm rounded-md bg-accent-gray bg-white p-sm desktop:grid-cols-3  max-semi-tablet:grid-cols-3 semi-tablet:grid-cols-5">
            {Array.from({ length: isTablet || isSemiTablet ? 10 : 9 }).map((_, index) => (
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
