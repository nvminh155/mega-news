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
    <div className="flex w-max flex-col items-center gap-sm rounded-md bg-accent-gray p-sm text-tertiary">
      <span>
        {translateDateWords(month)} {year}
      </span>
      <Iconfy
        icon={moods[mood].name}
        size={"xl"}
        style={{
          color: moods[mood].color,
        }}
      />
      <span>
        {points} {t("Points")}
      </span>
    </div>
  );
};

export default Satisfaction;
