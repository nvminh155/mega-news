import React from "react";
import { TUser } from "@/types";

import Avatar from "../Avatar/Avatar";
import { Iconfy } from "../Iconfy";

type TAuthorProps = TUser;

const Author: React.FC<TAuthorProps> = ({ ...props }) => {
  return (
    <div className="mt-auto flex items-center justify-between rounded-[12px] bg-gray-100 px-[16px] py-[13px]">
      <div className="flex items-center">
        <Avatar
          avatar={props.avatarUrl}
          containerProps={{
            className: "w-[44px] h-[44px]",
          }}
        />
        <div className="ml-3">
          <p className="text-sm font-semibold">{`${props.firstName} ${props.lastName}`}</p>
          <p className="text-xs text-gray-500">{props.title}</p>
        </div>
      </div>
      <Iconfy
        icon={"bi:bookmark"}
        size={"md"}
        className="cursor-pointer text-tertiary/50"
      />
    </div>
  );
};

export default Author;
