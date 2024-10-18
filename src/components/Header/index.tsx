import React from "react";
import { useAuthContext } from "@/contexts/AuthProvider";
import { useTranslation } from "react-i18next";

import AppLink from "../AppLink";
import FooterBar from "../FooterBar";
import { Iconfy } from "../Iconfy";
import Logo from "../Logo";
import DropdownMenu from "../Menu/DropdownMenu";
import DrawerHeader from "./Drawer";
import Search from "./Search";
import UserActions from "./UserActions";

const Header: React.FC = () => {
  const auth = useAuthContext();

  const { t } = useTranslation("global");
  return (
    <div className="flex items-start justify-between">
      <div className="left flex items-center justify-between gap-16 max-desktop:gap-5">
        <DrawerHeader />
        <Logo className="text-[22px] max-semi-tablet:hidden" />
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

      <div className="flex flex-1 items-center justify-end gap-5 max-semi-tablet:ml-3">
        <Search className="ml-auto max-semi-tablet:w-full" />
        <div className="user-actions max-tablet:hidden">
          <UserActions isAuthenticated={!!auth.user} />
        </div>
        <Iconfy
          icon={"mdi:bookmark-outline"}
          background
          className="cursor-pointer"
          containerProps={{ className: "max-semi-tablet:hidden" }}
        />
      </div>

      <FooterBar />
    </div>
  );
};

export default Header;
