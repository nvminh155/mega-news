import React from "react";
import { useTranslation } from "react-i18next";

import { Iconfy } from "@/components/Iconfy";
import { TitleSection } from "@/components/TitleSection";

const Contact: React.FC = () => {
  const { t: tInput } = useTranslation("input");
  const { t: tGlobal } = useTranslation("global");

  return (
    <div className="mt-[30px] flex flex-wrap items-center justify-between">
      <div className="flex h-[361px] items-center rounded-r-[50px] bg-gray-100">
        <div className="h-[297px] max-w-[840px]">map</div>
      </div>

      <div className="relative text-[13px] text-tertiary md:mt-[20px]">
        <TitleSection
          text={tGlobal("Title-section.mega-news-info")}
          className="mb-8 justify-start"
        />

        <span className="absolute left-0 top-[37px] h-[195px] w-[4px] rounded-[12px] bg-[#F5F5F5]"></span>

        <div className="ml-[10px]">
          <div className="mb-7 flex items-center gap-2">
            <Iconfy icon="oui:email" size={"sm"} />
            <span className="font-medium">
              {tInput("Label.email")} : Management@Mega.News
            </span>
          </div>
          <div className="mb-7 flex items-center gap-2">
            <Iconfy icon="lucide:smartphone" size={"sm"} />
            <span className="font-medium">
              {tInput("Label.phone-number")} : +1(234) 567-8910
            </span>
          </div>
          <div className="mb-7 flex items-center gap-2">
            <Iconfy icon="material-symbols-light:fax-sharp" size={"sm"} />
            <span className="font-medium">
              {tInput("Label.fax")} : +1(234) 567-8910
            </span>
          </div>
          <div className="mb-8 flex items-center gap-2">
            <Iconfy icon="streamline:location-target-1-solid" size={"sm"} />
            <span className="font-medium">
              {tInput("Label.address")} : 1234 Foxrun St. New Lenox, IL 123456
            </span>
          </div>
        </div>

        <div className="flex h-[40px] items-center justify-center gap-2 rounded-[12px] bg-[#F5F5F5]">
          <Iconfy icon="tabler:clock" size={"sm"} />
          <span className="font-medium">{tGlobal("contact.contact")}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
