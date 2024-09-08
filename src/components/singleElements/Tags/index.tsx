import { ElementMenu } from "@/components/tab/ElementMenu";

type TTag = {
  key: string;
  name: string;
};

const Tags: React.FC<{ tags: TTag[] }> = ({ tags }) => {
  return (
    <div className="rounded-md bg-gray px-4 py-5">
      <ElementMenu
        status="MegaMenItem"
        text="Tags"
        className="flex items-center justify-start p-0 pb-4 text-lg"
      />
      <div className="flex flex-wrap gap-[14px] text-xs font-medium text-tertiary/75">
        {tags?.map((tag) => <div key={tag.key}>{tag.name}</div>)}
      </div>
    </div>
  );
};

export default Tags;
