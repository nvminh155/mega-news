import AppButton from "@/components/Button";
import AvatarNav from "../profile/Nav/PropsNav/AvatarNav";
import MenuNav from "../profile/Nav/PropsNav/MenuNav";
import NavBar from "../profile/Navbar";
import TypeSendNews from "../profile/TypeSendNews";
import { Iconfy } from "@/components/Iconfy";

export const Kiet = () => {

  const items = [
    {
      label: "Marked"
    },
    {
      label: "Send Post"
    },
    {
      label: "Posts"
    },
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
          prefixIcon={<Iconfy icon={"ic:baseline-plus"} size={"lg"} />}
        >
          <div className="text-sm font-medium">Follow</div>
        </AppButton>
      </NavBar>

      <TypeSendNews />
    </div>
  );
};
