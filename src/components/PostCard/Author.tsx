import React from "react";
import { TUser } from "@/types";

import Avatar from "../Avatar/Avatar";
import { Iconfy } from "../Iconfy";

type TAuthorProps = TUser;

const Author: React.FC<TAuthorProps> = ({ ...props }) => {
  return (
    <div className="mt-auto flex items-center justify-between rounded-[12px] bg-accent-gray px-[16px] py-[13px]">
      <div className="flex items-center gap-[10px]">
        <Avatar
          avatar={props.avatarUrl}
          containerProps={{
            className: "w-[44px] h-[44px]",
          }}
        />
        <div className="flex flex-col justify-between">
          <p className="text-sm font-medium text-tertiary">{`${props.firstName} ${props.lastName}`}</p>
          <p className="text-xs text-tertiary/75">{props.title}</p>
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
