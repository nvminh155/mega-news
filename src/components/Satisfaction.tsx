import moods from "@/constants/moods";
import { useTranslation } from "react-i18next";

import translateDateWords from "@/utils/formatDatetime";

import { Iconfy } from "./Iconfy";

type TSatisfactionProps = {
  month?: string;
  year?: string | number;
  mood?: number;
  points?: number;
};

const Satisfaction = ({
  month = "August",
  year = 2022,
  mood = 0,
  points = 20,
}: TSatisfactionProps) => {
  const { t } = useTranslation("posts");
  return (
    <div className="flex max-w-[104px] flex-col items-center gap-sm rounded-md bg-accent-gray px-sm py-[15px] text-xs text-tertiary">
      <span>
        {translateDateWords(month)} {year}
      </span>
      <Iconfy
        icon={moods[mood].name}
        size={"lg"}
        style={{
          color: moods[mood].color,
        }}
        className="h-[32px] w-[32px]"
      />
      <span>
        {points} {t("Points")}
      </span>
    </div>
  );
};

export default Satisfaction;
