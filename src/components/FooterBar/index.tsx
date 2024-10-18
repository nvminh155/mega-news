import { useState } from "react";

import ItemFooter from "./ItemFooter";

const FooterBar = () => {
  const [iconActive, setIconActive] = useState<string>("typcn:home");
  const handleOnClickCallBack = (icon: string) => {
    setIconActive(icon);
  };

  return (
    <div
      className="fixed bottom-0 left-1/2 z-50 flex -translate-x-1/2 items-center gap-sm rounded-t-2xl bg-white px-5 py-3 shadow-lg semi-tablet:hidden"
      style={{
        boxShadow: "0px -3px 9px -1px #0000000D",
      }}
    >
      <ItemFooter
        icon="typcn:home"
        isActive={iconActive === "typcn:home"}
        onClickCallBack={handleOnClickCallBack}
      />
      <ItemFooter
        icon="stash:save-ribbon-solid"
        isActive={iconActive === "stash:save-ribbon-solid"}
        onClickCallBack={handleOnClickCallBack}
      />
      <ItemFooter
        icon="lsicon:user-filled"
        isActive={iconActive === "lsicon:user-filled"}
        onClickCallBack={handleOnClickCallBack}
      />
      <ItemFooter
        icon="heroicons-outline:chevron-double-up"
        isActive={iconActive === "heroicons-outline:chevron-double-up"}
        onClickCallBack={handleOnClickCallBack}
      />
    </div>
  );
};

export default FooterBar;
