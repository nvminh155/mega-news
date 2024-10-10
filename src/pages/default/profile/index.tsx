import { useState } from "react";

import AppButton from "@/components/Button";
import { Iconfy } from "@/components/Iconfy";

import AvatarNav from "./Nav/PropsNav/AvatarNav";
import MenuNav from "./Nav/PropsNav/MenuNav";
import NavBar from "./Navbar";
import TypeSendNews from "./TypeSendNews";
import YourPost from "./YourPost";

const Profile = () => {
  const items = [
    { label: "Marked" },
    { label: "Send Post" },
    { label: "Posts" },
  ];
  const [currentTab, setCurrentTab] = useState(0);

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
          <div className="text-sm font-medium">Edit Profile</div>
        </AppButton>
      </NavBar>

      {currentTab === 1 && <TypeSendNews />}
      {currentTab === 2 && <YourPost />}
    </div>
  );
};

export default Profile;
