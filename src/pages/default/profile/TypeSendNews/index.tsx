import { useState } from "react";

import { TabItem } from "@/components/Tab/Tabitem";

import FormSend from "./FormSend";

const TypeSendNews = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex pb-[20px]">
        {["Send Post", "Send Video"].map((text, i) => (
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
