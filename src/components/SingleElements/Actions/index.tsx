import { useTranslation } from "react-i18next";

import AppButton from "@/components/Button";
import { Iconfy } from "@/components/Iconfy";

type TAction = {
  key: string;
  label: string;
  icon: string;
};

const Actions: React.FC = () => {
  const { t } = useTranslation("posts");
  const items: TAction[] = [
    {
      key: "share",
      label: t("share"),
      icon: "system-uicons:paper-plane",
    },
    {
      key: "marking",
      label: t("marking"),
      icon: "bi:bookmark",
    },
    {
      key: "comment",
      label: t("comment"),
      icon: "fa-regular:comment-dots",
    },
  ];
  return (
    <div className="flex h-10 w-full gap-2">
      {items.map((item) => (
        <AppButton
          className="w-1/3 gap-2 bg-gray font-medium"
          variant={"disabled"}
          key={item.key}
          prefixIcon={<Iconfy icon={item.icon} size={"sm"} />}
        >
          <div>{item.label}</div>
        </AppButton>
      ))}
    </div>
  );
};

export default Actions;
