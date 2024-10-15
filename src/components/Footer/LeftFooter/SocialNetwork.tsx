import { useTranslation } from "react-i18next";

import AppButton from "@/components/Button";
import { Iconfy } from "@/components/Iconfy";
import { TitleSection } from "@/components/TitleSection";

const SocialNetwork = () => {
  const { t } = useTranslation("global");
  return (
    <TitleSection
      text={t("Title-section.social-network")}
      containerClassName="col-span-2"
    >
      <div className="flex flex-wrap items-center gap-sm">
        <AppButton
          className="gap-2"
          style={{
            background:
              "linear-gradient(262.85deg, #F45C9F 5.57%, #FF7563 73.65%)",
          }}
          prefixIcon={<Iconfy icon={"lucide:instagram"} />}
        >
          Instagram
        </AppButton>
        <AppButton
          style={{
            background:
              "linear-gradient(227.96deg, #2CA5E0 11.38%, #67C9F5 84.07%)",
          }}
          prefixIcon={<Iconfy icon={"ri:twitter-fill"} />}
        >
          Twitter
        </AppButton>
      </div>
    </TitleSection>
  );
};

export default SocialNetwork;
