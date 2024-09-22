import { useEffect, useState } from "react";
import { TUser } from "@/types";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/cn";
import { Iconfy } from "@/components/Iconfy";

interface InfoWirer {
  Rate: number;
  Follower: number;
  Post: number;
}
interface InfoWirerProps {
  User: TUser;
  className?: string;
}
export const InfoWirer: React.FC<InfoWirerProps> = ({ User, className }) => {
  const { t } = useTranslation("info");
  const [data, setData] = useState<InfoWirer>({
    Rate: 0,
    Follower: 0,
    Post: 0,
  });
  useEffect(() => {
    const fetchUserData = async () => {
      setData({
        Rate: User.followerIds?.length || 0,
        Follower: 1200 / 1000,
        Post: 27,
      });
    };
    fetchUserData();
  }, []);
  return (
    <div
      className={cn(
        "flex flex-1 justify-center space-x-5 text-center",
        className
      )}
    >
      <div className="flex">
        <Iconfy
          icon={"material-symbols:star-outline"}
          className="h-[20px] w-[20px]"
        />
        {t("rate")} : {data.Rate}
      </div>
      <div className="flex">
        <Iconfy icon={"iconamoon:profile-bold"} className="h-[20px] w-[20px]" />
        {t("follower")} : {data.Follower} k
      </div>
      <div className="flex">
        <Iconfy icon={"mdi:post-outline"} className="h-[20px] w-[20px]" />
        {t("post")} : {data.Post}
      </div>
    </div>
  );
};
