import { TTag } from "@/types";

import { Actions, Creator, Tags } from "@/components/SingleElements";
import { TCreator } from "@/components/SingleElements/Creator";

import Advertising from "./Advertising";
import TopPosts from "./TopPosts";

type TSidebarProps = {
  creator: TCreator;
  tags: TTag[];
};

const Sidebar: React.FC<TSidebarProps> = ({ creator, tags }) => {
  return (
    <div className="flex max-w-[360px] flex-col gap-6 max-desktop:max-w-[760px]">
      <div className="flex flex-col gap-6 max-desktop:flex-row max-desktop:items-stretch max-desktop:justify-between max-semi-tablet:flex-col-reverse">
        <div className="flex-1 space-y-md max-desktop:w-1/2 max-tablet:w-full">
          <Actions />
          <Creator
            avatar={creator.avatar}
            name={creator.name}
            posts={creator.posts}
          />
        </div>

        <Tags
          tags={tags}
          className="max-desktop:w-1/2 max-desktop:flex-1 max-tablet:w-full"
        />
      </div>

      <div className="max-desktop:hidden">
        <TopPosts />
      </div>

      <Advertising className="grid grid-cols-1 gap-md max-desktop:grid-cols-2 max-tablet:grid-cols-1" />
    </div>
  );
};

export default Sidebar;
