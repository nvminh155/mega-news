import { TTag } from "@/types";

import { TitleSection } from "@/components/TitleSection";

const Tags: React.FC<{ tags: TTag[] }> = ({ tags }) => {
  return (
    <div className="rounded-md bg-gray px-4 py-5">
      <TitleSection
        text="Tags"
        className="flex items-center justify-start text-lg"
      />
      <div className="flex flex-wrap gap-[14px] text-xs font-medium text-tertiary/75">
        {tags?.map((tag) => <div key={tag.id}>{tag.name}</div>)}
      </div>
    </div>
  );
};

export default Tags;
