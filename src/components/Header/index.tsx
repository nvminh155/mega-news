import React from "react";

import { Iconfy } from "../Iconfy";
import Logo from "../Logo";
import DropdownMenu from "../Menu/DropdownMenu";
import UserActions from "./UserActions";

const menu = ["Categories", "Pages", "Contact Us", "About Us"];

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="left flex items-center justify-between gap-16">
        <Logo className="text-[22px]" />
        <div className="menu flex items-center gap-8 font-medium text-tertiary">
          {menu.map((item) => (
            <DropdownMenu key={item} text={item} className="menu-item" />
          ))}
        </div>
      </div>

      <div className="right flex w-[300px] items-center gap-5">
        <div className="search h-5 flex-1 bg-red-50">s</div>
        <div className="user-actions">
          <UserActions isAuthenticated={false} />
        </div>
        <Iconfy
          icon={"mdi:bookmark-outline"}
          background
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
