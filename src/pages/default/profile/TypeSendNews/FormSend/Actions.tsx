import { useTranslation } from "react-i18next";

import AppButton from "@/components/Button";
import { Iconfy } from "@/components/Iconfy";

const Actions = () => {
  const { t } = useTranslation("upload");
  return (
    <div className="actions flex items-center gap-3">
      <AppButton
        prefixIcon={<Iconfy icon={"material-symbols:upload"} />}
        variant={"disabled"}
      >
        {t("action.Draft")}
      </AppButton>
      <AppButton
        prefixIcon={<Iconfy icon={"icon-park-outline:preview-open"} />}
        variant={"disabled"}
      >
        {t("action.Preview")}
      </AppButton>
      <AppButton
        htmlType="submit"
        prefixIcon={<Iconfy icon={"mingcute:send-fill"} />}
      >
        {t("action.Public")}
      </AppButton>
    </div>
  );
};

export default Actions;
