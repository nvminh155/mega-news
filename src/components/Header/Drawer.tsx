import React, { useState } from "react";
import { Drawer } from "antd";

import { cn } from "@/lib/cn";

import AppButton from "../Button";
import { Iconfy } from "../Iconfy";
import Logo from "../Logo";
import { TitleSection } from "../TitleSection";

const DrawerHeader: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const TitleDrawer = (
    <div className="flex items-center justify-between">
      <Logo className="text-[22px]" />
      <AppButton
        prefixIcon={
          <Iconfy icon={"iconamoon:close-bold"} className="text-tertiary" />
        }
        size={"icon"}
        onClick={onClose}
        className="bg-accent-gray hover:!bg-accent-gray"
      />
    </div>
  );

  return (
    <div className="hidden max-desktop:block">
      <AppButton
        prefixIcon={
          <Iconfy icon={"fa6-solid:bars"} className="text-tertiary" />
        }
        size={"icon"}
        onClick={showDrawer}
        className="h-[48px] w-[48px] bg-accent-gray hover:!bg-accent-gray"
      />
      <Drawer
        title={TitleDrawer}
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"left"}
      >
        <ItemDrawer text="Categories" active icon="get" />
        <ItemDrawer text="Pages" icon="get" />
        <ItemDrawer text="Contact Us" />
        <ItemDrawer text="About Us" />
      </Drawer>
    </div>
  );
};

type TItemDrawer = {
  text: string;
  active?: boolean;
  icon?: string;
};
const ItemDrawer = ({ text, active, icon }: TItemDrawer) => {
  return (
    <div
      className={cn(
        "mb-md flex cursor-pointer items-center justify-between rounded-md p-sm hover:bg-accent-gray",
        {
          "bg-accent-gray": active,
        }
      )}
    >
      {active ? (
        <TitleSection text={text} />
      ) : (
        <span className="font-medium text-tertiary">{text}</span>
      )}
      {icon && (
        <Iconfy
          icon={"radix-icons:caret-right"}
          size={"lg"}
          className="text-tertiary/50"
        />
      )}
    </div>
  );
};
export default DrawerHeader;
