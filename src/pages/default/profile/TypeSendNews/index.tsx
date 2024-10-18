import { useState } from "react";
import { useTranslation } from "react-i18next";

import { TabItem } from "@/components/Tab/Tabitem";

import FormSend from "./FormSend";

const TypeSendNews = () => {
  const [active, setActive] = useState(0);
  const { t } = useTranslation("posts");
  return (
    <div className="mt-md">
      <div className="flex pb-[20px]">
        {[t("Send Post"), t("Send Video")].map((text, i) => (
          <TabItem
            key={i + 1}
            text={text}
            status={i === active ? "enabled" : "disabled"}
            onClick={() => setActive(i)}
          />
        ))}
      </div>

      <FormSend type={active === 0 ? "image" : "video"} />
    </div>
  );
};

export default TypeSendNews;
