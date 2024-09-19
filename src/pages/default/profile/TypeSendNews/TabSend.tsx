import { useState } from "react";

import { TabItem } from "@/components/Tab/Tabitem";

const TabSend = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      {["Send Post", "Send Video"].map((text, i) => (
        <TabItem
          key={i + 1}
          text={text}
          status={i === active ? "enabled" : "disabled"}
          onClick={() => setActive(i)}
        />
      ))}
    </div>
  );
};

export default TabSend;
