import React from "react";
import { TUser } from "@/types";

import Avatar from "../Avatar/Avatar";
import Container, { EDirection } from "../Container";

interface NavBarInfoProps {
  AppButton?: React.ReactNode;
  MenuItem?: React.ReactNode;
  User: TUser;
}
export const NavBarInfo: React.FC<NavBarInfoProps> = ({
  User,
  AppButton,
  MenuItem,
}) => {
  return (
    <Container
      className={"TopWriter gap-y-[15px] rounded-sm bg-accent-gray p-sm"}
    >
      <img className="h-[150px] w-full object-cover" src={User.bannerUrl} />
      <Container direction={EDirection.ROW}>
        <div className="flex items-center justify-center gap-x-[10px]">
          <Avatar
            containerProps={{ className: "h-[75px] w-[75px]" }}
            name={User.firstName + " " + User.lastName}
            type={"default"}
            avatar={User.avatarUrl}
          />
          <p className="text-sm font-medium">
            {User.firstName + " " + User.lastName}
          </p>
        </div>
        {MenuItem && <div className="flex-1">{MenuItem}</div>}
        {AppButton && <div>{AppButton}</div>}
      </Container>
    </Container>
  );
};
