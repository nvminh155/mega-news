import i18n from "@/i18n";
import { useTranslation } from "react-i18next";

import AppLink from "@/components/AppLink";
import AppButton from "@/components/button";

const Home = () => {
  const { t } = useTranslation();



  return (
    <div>
      Home Page
      <h1>{t("Course.description")}</h1>
      <div className={"h-full w-full bg-primary-10 font-semibold text-primary"}>
        alsdfljsaf
      </div>
      <AppLink to="/news">à</AppLink>
      <AppButton
        onClick={() => {
          i18n.changeLanguage("vi");
        }}
      >
        s
      </AppButton>
    </div>
  );
};

export default Home;
