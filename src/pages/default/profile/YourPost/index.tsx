import Satisfaction from "@/components/Satisfaction";
import { TitleSection } from "@/components/TitleSection";

import { categories, years } from "../..//profile/ViewPostChart/data";
import ViewPostChart from "../ViewPostChart";
import ListPost from "@/components/ListPost";

const YourPost = () => {
  return (
    <div>
      <div className="flex gap-md max-desktop:flex-col">
        <div className="flex-1">
          <TitleSection text="View Posts" />
          <ViewPostChart categories={categories} years={years} />,
        </div>
        <div>
          <TitleSection text="Satisfaction of posts" />
          <div className="grid grid-cols-3 max-desktop:grid-cols-5 gap-md rounded-md bg-accent-gray bg-white p-sm">
            {Array.from({ length: 9 }).map((_, index) => (
              <Satisfaction key={index + 1} />
            ))}
          </div>
        </div>
      </div>
      <ListPost title="your"  />
    </div>
  );
};

export default YourPost;
