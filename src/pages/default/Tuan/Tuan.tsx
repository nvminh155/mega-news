import AppButton from "@/components/Button";
import { Iconfy } from "@/components/Iconfy";
import Posts from "@/components/ListPost";
import NewPost from "@/components/ListPost/NewPost";
import AvatarNav from "@/pages/default/Tuan/Nav/PropsNav/AvatarNav";

import MenuNav from "./Nav/PropsNav/MenuNav";
import NavBar from "./Navbar";

const Tuan = () => {
  const items = [
    { label: "Marked" },
    { label: "Send Post" },
    { label: "Posts" },
  ];
  return (
    <div className="mt-5">
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

        <NewPost />
        <Posts title={"popular"} />
        <Posts title={"trendy"} />
        <Posts title={"top"} />
        <Posts title={"your"} />
        <Posts title={"related"} />
      </div>
    </div>
  );
};

export default Tuan;
