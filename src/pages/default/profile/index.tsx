import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { cn } from "@/lib/cn";
import Avatar from "@/components/Avatar/Avatar";
import AppButton from "@/components/Button";
import { Iconfy } from "@/components/Iconfy";

import ProfileMarked from "./Marked";
import MenuNav from "./Nav/PropsNav/MenuNav";
import NavBar from "./Navbar";
import TypeSendNews from "./TypeSendNews";
import YourPost from "./YourPost";

const Profile = () => {
  const navigate = useNavigate();

  const { t } = useTranslation("posts");
  const { t: tprofile } = useTranslation("profile");
  const { id } = useParams();
  const items = [
    { label: t("Marked") },
    { label: t("Send Post") },
    { label: t("posts") },
  ];
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div>
      <NavBar bgImg="/unsplash_9XngoIpxcEo.svg">
        <div className={cn("ml-2 flex flex-1 items-center gap-sm")}>
          <Avatar
            containerProps={{
              className:
                "h-[75px] w-[75px] flex-shrink-0 rounded-md object-cover",
            }}
            avatar={undefined}
          />
          <div className="mt-md flex flex-1 items-center gap-2 max-desktop:flex-col max-desktop:items-start">
            <div className="flex items-center gap-md">
              <h5 className="text-md font-medium text-tertiary-black">
                {"Louis Hoebregts"}
              </h5>
              <AppButton
                className="mr-2 text-sm text-popover"
                size={"sm"}
                variant={"outline"}
                prefixIcon={
                  <Iconfy icon={"mingcute:user-edit-line"} size={"md"} />
                }
                onClick={() => {
                  navigate("/profile/" + id + "/edit");
                }}
              >
                <div className="text-sm font-medium max-semi-tablet:hidden">
                  {tprofile("Edit Profile")}
                </div>
              </AppButton>
            </div>
            <MenuNav
              menuItems={items}
              onChangeCallback={(n) => setCurrentTab(n)}
            />
          </div>
        </div>
      </NavBar>

      {currentTab === 0 && <ProfileMarked />}
      {currentTab === 1 && <TypeSendNews />}
      {currentTab === 2 && <YourPost />}
    </div>
  );
};

export default Profile;
