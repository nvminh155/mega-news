import React, { useState } from "react";
import { Dropdown, Space } from "antd";

import { cn } from "@/lib/cn";

import Avatar from "../Avatar/Avatar";
import { Iconfy } from "../Iconfy";

interface TNotAuthProps {
  Login?: string;
  Register?: string;
}

const NotAuth: React.FC<TNotAuthProps> = ({ Login = "/", Register = "/" }) => {
  return (
    <div className="flex w-[168px] cursor-pointer items-center gap-2">
      <Iconfy icon="tdesign:user" className="h-[20px] w-[20px]" background />
      <div className="w-[112px] text-base font-medium text-black">
        <a href={Login}>Login</a>
        <span className="mx-1">|</span>
        <a href={Register}>Register</a>
      </div>
    </div>
  );
};

type AuthenticatedProps = {
  name: string;
  avatar?: string;
};

const Authenticated: React.FC<AuthenticatedProps> = ({ name, avatar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleVisibleChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <Dropdown
      menu={{
        items: [
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
      }} //data item
      onOpenChange={handleVisibleChange}
      trigger={["click"]}
      className="cursor-pointer"
    >
      <Space>
        <Avatar
          avatar={avatar}
          containerProps={{
            className: "w-12 h-12 rounded-lg flex-none order-0",
          }}
        />
        <span className="font-roboto order-1 flex-none text-[16px] font-medium capitalize leading-[19px] text-black">
          {name}
        </span>
        <Iconfy
          icon="solar:alt-arrow-up-linear"
          className={cn("order-2 flex-none transition-transform duration-300", {
            "rotate-180": isOpen,
          })}
        />
      </Space>
    </Dropdown>
  );
};

type TUserActionsProps = {
  isAuthenticated?: boolean;
};

const UserActions = ({ isAuthenticated }: TUserActionsProps) => {
  return (
    <div>
      {!isAuthenticated ? (
        <NotAuth />
      ) : (
        <Authenticated name="Behzad" avatar="/avatar.svg" />
      )}
    </div>
  );
};

export default UserActions;
