import { useState } from "react";
import { useTranslation } from "react-i18next";

import AppButton from "@/components/Button";
import { Iconfy } from "@/components/Iconfy";

import AvatarNav from "./Nav/PropsNav/AvatarNav";
import MenuNav from "./Nav/PropsNav/MenuNav";
import NavBar from "./Navbar";
import TypeSendNews from "./TypeSendNews";
import YourPost from "./YourPost";

const Profile = () => {
  const { t } = useTranslation("posts");
  const items = [
    { label: t("Marked") },
    { label: t("Send Post") },
    { label: t("posts") },
  ];
  const [currentTab, setCurrentTab] = useState(0);
  const { t: tprofile } = useTranslation("profile");
  return (
    <div>
      <NavBar bgImg="/unsplash_9XngoIpxcEo.svg">
        <AvatarNav
          containerProps={{ className: "ml-2" }}
          name={"Louis Hoebregts"}
        />
        <MenuNav menuItems={items} onChangeCallback={(n) => setCurrentTab(n)} />
        <AppButton
          className="mr-2 text-sm text-popover"
          size={"sm"}
          variant={"outline"}
          prefixIcon={<Iconfy icon={"mingcute:user-edit-line"} size={"lg"} />}
        >
          <div className="text-sm font-medium">{tprofile("Edit Profile")}</div>
        </AppButton>
      </NavBar>

      {currentTab === 1 && <TypeSendNews />}
      {currentTab === 2 && <YourPost />}
    </div>
  );
};

export default Profile;
