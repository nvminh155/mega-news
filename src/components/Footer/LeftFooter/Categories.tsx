import { useTranslation } from "react-i18next";

import { TitleSection } from "../../TitleSection";

const Categories = () => {
  const { t } = useTranslation("info");
  return (
    <TitleSection text={t("categories")} containerClassName="col-span-2">
      <div className="flex flex-col space-y-[15px]">
        <div>"culture"1</div>
        <div>"culture"2</div>
        <div>"culture"3</div>
        <div>"culture"4</div>
        <div>"culture"5</div>
      </div>
    </TitleSection>
  );
};

export default Categories;
