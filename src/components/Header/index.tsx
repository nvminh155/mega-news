import React from "react";
import { useTranslation } from "react-i18next";

import AppLink from "../AppLink";
import { Iconfy } from "../Iconfy";
import Logo from "../Logo";
import DropdownMenu from "../Menu/DropdownMenu";
import DrawerHeader from "./Drawer";
import Search from "./Search";
import UserActions from "./UserActions";

const Header: React.FC = () => {
  const { t } = useTranslation("global");
  return (
    <div className="flex items-center justify-between">
      <div className="left flex items-center justify-between gap-16 max-desktop:gap-5">
        <DrawerHeader />
        <Logo className="text-[22px]" />
        <div className="menu flex items-center gap-8 font-medium text-tertiary max-desktop:hidden">
          <DropdownMenu
            text={t("Title-section.categories")}
            className="menu-item"
          />
          <DropdownMenu text={t("Title-section.Pages")} className="menu-item" />
          <AppLink to={"/contact"}>{t("Title-section.contact-us")}</AppLink>
          <AppLink to={"/about"}>{t("Title-section.about-us")}</AppLink>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-5">
        <Search className="ml-auto desktop:h-[48px] desktop:max-w-[399px]" />
        <div className="user-actions max-mobile:hidden">
          <UserActions isAuthenticated={false} />
        </div>
        <Iconfy
          icon={"mdi:bookmark-outline"}
          background
          className="cursor-pointer"
          containerProps={{ className: "max-mobile:hidden" }}
        />
      </div>
    </div>
  );
};

export default Header;
