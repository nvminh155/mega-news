import React from "react";

import Avatar from "../avatar/Avatar";
import { Iconfy } from "../Iconfy";

export type TAuthor = {
  avatarUrl?: string;
  name?: string;
  title?: string;
};

const Author: React.FC<TAuthor> = ({ ...props }) => {
  return (
    <div className="flex items-center justify-between rounded-[12px] bg-[#F5F5F5] px-[16px] py-[13px]">
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
        className="cursor-pointer text-[#3E323280]"
      />
    </div>
  );
};

export default Author;
