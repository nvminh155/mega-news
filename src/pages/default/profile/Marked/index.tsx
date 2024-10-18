import PaginationPost from "@/components/PaginationPost";

import { DataWriter } from "./DataWriter";

const ProfileMarked = () => {
  const Data = DataWriter.posts;

  return <PaginationPost data={Data} className="mt-md" />;
};

export default ProfileMarked;
