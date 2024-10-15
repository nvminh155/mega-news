import { useTranslation } from "react-i18next";

const CopyRight = () => {
  const { t } = useTranslation("global");
  return (
    <div className="mb-3 flex w-[90%] justify-between rounded-br-md rounded-tr-md bg-tertiary/5 px-[12px] py-[8px] pl-lg text-sm text-tertiary/75">
      <span>{t("CopyRight.Privacy Policy")}</span>
      <span>{t("CopyRight.CopyRight")}</span>
    </div>
  );
};

export default CopyRight;
