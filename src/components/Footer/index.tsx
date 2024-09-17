import React from "react";

import LeftFooter from "./LeftFooter";
import Comments from "./RightFooter/Comments";
import FollowInstagram from "./RightFooter/FollowInstagram";

const Footer: React.FC = () => {
  return (
    <div className="flex mt-auto w-full gap-5 py-3">
      <LeftFooter />
      <div className="flex w-1/2 gap-2 py-lg">
        <Comments />
        <FollowInstagram />
      </div>
    </div>
  );
};

export default Footer;
