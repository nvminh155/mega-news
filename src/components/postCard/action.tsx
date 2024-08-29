import React from "react";

import { Iconfy } from "../Iconfy";

type ActionProps = {
  viewers?: string[];
  stars?: string[];
};

const Action: React.FC<ActionProps> = ({ ...props }) => {
  return (
    <div className="flex w-full items-center justify-between rounded-[12px] bg-[#F5F5F5] px-[16px] py-[13px]">
      <div className="flex gap-3">
        <div className="flex items-center justify-center">
          <Iconfy
            icon={"fa6-regular:eye"}
            size={"lg"}
            className="cursor-pointer text-[#3E323280]"
          />
          <p className="ml-2 text-sm font-medium">{props.viewers?.length}</p>
        </div>
        <div className="flex items-center justify-center">
          <Iconfy
            icon={"tabler:star"}
            size={"lg"}
            className="cursor-pointer text-[#3E323280]"
          />
          <p className="ml-2 text-sm font-medium">{props.stars?.length}</p>
        </div>
      </div>
      <div className="flex gap-5">
        <Iconfy
          icon={"fa-regular:edit"}
          size={"lg"}
          className="cursor-pointer text-[#3E323280]"
        />
        <Iconfy
          icon={"ion:trash-outline"}
          size={"lg"}
          className="cursor-pointer text-[#3E323280]"
        />
      </div>
    </div>
  );
};

export default Action;
