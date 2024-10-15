import { useTranslation } from "react-i18next";

import { TitleSection } from "@/components/TitleSection";

const FollowInstagram = () => {
  const { t } = useTranslation("instagram");
  return (
    <TitleSection text={t("Follow On Instagram")}>
      <div className="grid grid-cols-3 gap-md">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i + 1} className="max-h-[104px] max-w-[104px] basis-1/3">
            <img
              src="/food01.jpg"
              alt="follow me"
              className="h-full w-full rounded-md object-fill"
            />
          </div>
        ))}
      </div>
    </TitleSection>
  );
};

export default FollowInstagram;
