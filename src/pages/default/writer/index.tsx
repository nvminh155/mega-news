import { Pathname } from "@/components/Pathname/Pathname";

import { LatestPosts } from "./LatestPosts";
import { TopWriter } from "./TopWriter";

export const Writer = () => {
  return (
    <div>
      <Pathname />
      <TopWriter />
      <LatestPosts />
    </div>
  );
};
