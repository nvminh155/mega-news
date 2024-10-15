import { TTag } from "@/types";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/cn";
import { TitleSection } from "@/components/TitleSection";

interface TagsProps {
  tags: TTag[];
  className?: string;
}
const Tags: React.FC<TagsProps> = ({ tags, className }) => {
  const { t } = useTranslation("posts");
  return (
    <div className={cn(className, "rounded-md bg-gray px-4 py-5")}>
      <TitleSection
        text={t("Tags")}
        className="flex items-center justify-start text-lg"
      >
        <div className="flex flex-wrap gap-[14px] text-xs font-medium text-tertiary/75">
          {tags?.map((tag) => <div key={tag.id}>{tag.name}</div>)}
        </div>
      </TitleSection>
    </div>
  );
};

export default Tags;
