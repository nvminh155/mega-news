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
    <div className="flex max-w-[360px] flex-col gap-6">
      <Actions />
      <Creator
        avatar={creator.avatar}
        name={creator.name}
        posts={creator.posts}
      />
      <Tags tags={tags} />
      <TopPosts />
      <Advertising />
    </div>
  );
};

export default Sidebar;
