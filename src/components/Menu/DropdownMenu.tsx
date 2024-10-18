import { useState } from "react";
import { Dropdown, type DropdownProps, type MenuProps } from "antd";


import { Iconfy } from "../Iconfy";

type TDropdownMenuProps = {
  text: string;
  items?: MenuProps["items"];
} & DropdownProps;

const DropdownMenu = ({
  text,
  items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ],
  className,
  ...props
}: TDropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      onOpenChange={(isOpen) => {
        setIsOpen(isOpen);
      }}
      openClassName="w-max"
      {...props}
    >
      <div
        onClick={(e) => e.preventDefault()}
        className="flex cursor-pointer items-center gap-1"
      >
        {text}
        <Iconfy icon={isOpen ? "ph:caret-up-bold" : "ph:caret-down-bold"} />
      </div>
    </Dropdown>
  );
};

export default DropdownMenu;
