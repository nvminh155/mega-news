import { useTranslation } from "react-i18next";

import useLocale from "@/hooks/useLocale";

const useTrans = () => {
  const locale = useLocale();
  const { t } = useTranslation("translation", {
    lng: locale,
  });

  return t;
};

export default useTrans;
