import React from "react";

import AppButton from "@/components/Button";
import { Iconfy } from "@/components/Iconfy";
import { TPostCard } from "@/components/PostCard/type";

type TCreatorProps = {
  avatar: string;
  name?: string;
  posts?: TPostCard[];
};

const Creator: React.FC<TCreatorProps> = ({
  avatar = "/avatar.svg",
  name,
  posts = [],
}) => {
  return (
    <div className="flex h-auto w-full flex-1 flex-row gap-[10px] rounded-lg bg-gray p-[15px]">
      <img
        src={avatar}
        alt={name}
        className="h-[87px] w-[87px] flex-shrink-0 rounded-md object-cover"
      />
      <div className="flex w-full flex-col">
        <div className="flex flex-1 items-center justify-between font-semibold">
          <p className="line-clamp-1 w-3/4 text-tertiary-black">{name}</p>
          <div className="w-1/4 text-xs text-tertiary/75">
            {`${posts.length} ${posts.length > 1 ? "posts" : "post"}`}
          </div>
        </div>
        <AppButton
          className="mt-auto w-max gap-2 text-sm text-popover"
          size={"sm"}
          prefixIcon={<Iconfy icon={"ic:baseline-plus"} size={"lg"} />}
        >
          <div>Follow</div>
        </AppButton>
      </div>
    </div>
  );
};

export default Creator;
