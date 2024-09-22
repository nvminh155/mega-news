import { useTranslation } from "react-i18next";

import AppButton from "@/components/Button";
import { Iconfy } from "@/components/Iconfy";

export const WriterButton = () => {
  const { t } = useTranslation("info");
  return (
    <AppButton prefixIcon={<Iconfy icon={"ic:baseline-plus"} />}>
      {t("follow")}
    </AppButton>
  );
};
