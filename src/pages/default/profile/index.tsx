import AppButton from "@/components/Button";
import { Iconfy } from "@/components/Iconfy";

import AvatarNav from "./Nav/PropsNav/AvatarNav";
import MenuNav from "./Nav/PropsNav/MenuNav";
import NavBar from "./Navbar";
import TypeSendNews from "./TypeSendNews";

const Profile = () => {
  const items = [
    { label: "Marked" },
    { label: "Send Post" },
    { label: "Posts" },
  ];

  return (
    <div>
      <NavBar bgImg="/unsplash_9XngoIpxcEo.svg">
        <AvatarNav
          containerProps={{ className: "ml-2" }}
          name={"Louis Hoebregts"}
        />
        <MenuNav menuItems={items}></MenuNav>
        <AppButton
          className="mr-2 text-sm text-popover"
          size={"sm"}
          variant={"outline"}
          prefixIcon={<Iconfy icon={"mingcute:user-edit-line"} size={"lg"} />}
        >
          <div className="text-sm font-medium">Edit Profile</div>
        </AppButton>
      </NavBar>

      <TypeSendNews />
    </div>
  );
};

export default Profile;
