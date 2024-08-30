import React from "react";

import Avatar from "../avatar/Avatar";
import { Iconfy } from "../Iconfy";
import { TAuthor } from "./type";

type TAuthorProps = TAuthor;

const Author: React.FC<TAuthorProps> = ({ ...props }) => {
  return (
    <div className="flex h-auto items-center justify-between rounded-[12px] bg-gray-100 px-[16px] py-[13px]">
      <div className="flex items-center">
        <Avatar
          avatar={props.avatarUrl}
          containerProps={{
            className: "w-[44px] h-[44px]",
          }}
        />
        <div className="ml-3">
          <p className="text-sm font-semibold">{props.name}</p>
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
