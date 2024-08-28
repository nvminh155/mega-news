import { ElementMenu } from "@/components/tab/ElementMenu";
import { TabItem } from "@/components/tab/Tabitem";
import { TitleSection } from "@/components/tab/TitleSection";

export const Phuoc = () => {
  return (
    <div>
      <div className="flex">
        <TabItem status="disabled" text="new posts" />
        <TabItem status="enabled" text="new posts" />
      </div>

      <div className="flex">
        <TitleSection status="default" text="new posts" />
        <TitleSection status="dot" text="new posts" />
        <TitleSection status="simple" text="new posts" />
      </div>
      <div className="flex">
        <ElementMenu status="MegaMenItem" text="items" />
        <ElementMenu status="MenItemSub" text="child item" />
        <ElementMenu status="MenItemIcon" text=" child item " />
        <ElementMenu status="FooterMenItem" text=" item " />
      </div>
    </div>
  );
};
