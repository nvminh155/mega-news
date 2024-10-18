import { useTranslation } from "react-i18next";

import Avatar from "@/components/Avatar/Avatar";
import { TitleSection } from "@/components/TitleSection";

// Sample data for the team
const team = [
  {
    job: "Designer",
    name: "Jon Kantner1",
    avatar: "/avatar.svg",
  },
  {
    job: "Designer",
    name: "Jon Kantner2",
    avatar: "/avatar.svg",
  },
  {
    job: "Designer",
    name: "Jon Kantner3",
    avatar: "/avatar.svg",
  },
  {
    job: "Designer",
    name: "Jon Kantner4",
    avatar: "/avatar.svg",
  },
  {
    job: "Designer",
    name: "Jon Kantner5",
    avatar: "/avatar.svg",
  },
  {
    job: "Designer",
    name: "Jon Kantner6",
    avatar: "/avatar.svg",
  },
];

const MegaNewsTeam = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-[60px]">
      <TitleSection text={t("Title-section.mega-news-team")} />

      <div className="grid grid-cols-3 gap-md max-tablet:grid-cols-2">
        {team.map((member, index) => (
          <Avatar
            key={index + 1}
            type="inside"
            job={member.job}
            name={member.name}
            avatar={member.avatar}
            containerProps={{className: "max-semi-tablet:max-w-[150px] max-tablet:basis-1/2"}}
          />
        ))}
      </div>
    </div>
  );
};

export default MegaNewsTeam;
