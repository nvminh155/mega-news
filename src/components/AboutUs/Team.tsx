import Avatar from "../Avatar/Avatar";
import { TitleSection } from "../TitleSection";

// Sample data for the team
const team = [
  {
    job: "Designer",
    name: "Jon Kantner1",
    avatar: "/avatar.svg"
  },
  {
    job: "Designer",
    name: "Jon Kantner2",
    avatar: "/avatar.svg"
  },
  {
    job: "Designer",
    name: "Jon Kantner3",
    avatar: "/avatar.svg"
  },
  {
    job: "Designer",
    name: "Jon Kantner4",
    avatar: "/avatar.svg"
  },
  {
    job: "Designer",
    name: "Jon Kantner5",
    avatar: "/avatar.svg"
  },
  {
    job: "Designer",
    name: "Jon Kantner6",
    avatar: "/avatar.svg"
  }
];

const MegaNewsTeam = () => {
  return (
    <div className=" lg:h-[319px] mt-[60px] ">
      <TitleSection text="Mega News team" className="mb-4 justify-start" />

      <div className="flex flex-wrap gap-4 items-center justify-center">
        {team.map((member, index) => (
          <Avatar
            key={index}
            type="inside"
            job={member.job}
            name={member.name}
            avatar={member.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default MegaNewsTeam;
