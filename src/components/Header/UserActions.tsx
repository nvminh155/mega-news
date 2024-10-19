import React, { useState } from "react";
import { useAuthContext } from "@/contexts/AuthProvider";
import i18n from "@/i18n";
import { Dropdown, Space } from "antd";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/cn";

import Avatar from "../Avatar/Avatar";
import { Iconfy } from "../Iconfy";
import { useNavigate } from "react-router-dom";

interface TNotAuthProps {}

const NotAuth: React.FC<TNotAuthProps> = () => {
  const auth = useAuthContext();

  const { t } = useTranslation("global");

  const handleLogin = () => {
    const author = {
      id: "user1",
      avatarUrl:
        "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-3d-thien-nhien-003.jpg",
      bannerUrl:
        "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-3d-thien-nhien-003.jpg",
      firstName: "John",
      lastName: "Doe",
      userName: "johndoe",
      password: "123456",
      email: "abc1@gmail.com",
      title: "Hello World",
      followerIds: ["user2"],
      explanationHTML: "This is my explanation",
    };
    auth.handleLogin(author);
  };

  return (
    <div
      className="flex cursor-pointer items-center gap-2"
      onClick={handleLogin}
    >
      <Iconfy icon="tdesign:user" size={"md"} background />
      <div className="text-base font-medium text-black">
        <div>{t("Btn.login")}</div>
      </div>
    </div>
  );
};

type AuthenticatedProps = {
  name: string;
  avatar?: string;
};

const Authenticated: React.FC<AuthenticatedProps> = ({ name, avatar }) => {
  const auth = useAuthContext();
  const navigate = useNavigate();

  const { t } = useTranslation("info");
  const [isOpen, setIsOpen] = useState(false);

  const handleVisibleChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <Dropdown
      menu={{
        items: [
          {
            key: "2",
            label: (
              <div
                onClick={() => {
                  i18n.changeLanguage(i18n.language === "en" ? "vi" : "en");
                }}
              >
                {t("change-lang")}
              </div>
            ),
          },
          {
            key: "3",
            label: (
              <div
                onClick={() => {
                  navigate("/profile/12");
                }}
              >
                {t("profile")}
              </div>
            ),
          },
          {
            key: "1",
            label: (
              <div
                onClick={() => {
                  auth.handleLogout();
                }}
              >
                {t("log-out")}
              </div>
            ),
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
            className: "w-10 h-10 rounded-lg ",
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
  const { user } = useAuthContext();
  return (
    <div>
      {!user || !isAuthenticated ? (
        <NotAuth />
      ) : (
        <Authenticated name={user?.firstName} avatar={user.avatarUrl} />
      )}
    </div>
  );
};

export default UserActions;
