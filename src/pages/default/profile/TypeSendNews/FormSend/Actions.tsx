import { useTranslation } from "react-i18next";

import AppButton from "@/components/Button";
import { Iconfy } from "@/components/Iconfy";

const Actions = () => {
  const { t } = useTranslation("upload");
  return (
    <div className="actions flex items-center justify-between gap-3">
      <AppButton
        prefixIcon={<Iconfy icon={"material-symbols:upload"} />}
        variant={"disabled"}
        className="px-5"
      >
        {t("action.Draft")}
      </AppButton>
      <AppButton
        prefixIcon={<Iconfy icon={"icon-park-outline:preview-open"} />}
        variant={"disabled"}
        className="px-5"
      >
        {t("action.Preview")}
      </AppButton>
      <AppButton
        htmlType="submit"
        prefixIcon={<Iconfy icon={"mingcute:send-fill"} />}
        className="px-5"
      >
        {t("action.Public")}
      </AppButton>
    </div>
  );
};

export default Actions;
