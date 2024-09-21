import clsx from "clsx";

import Avatar from "@/components/Avatar/Avatar";

type AvatarNavProps = {
  name?: string;
  avatarImg?: string;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
};

const AvatarNav = ({ name, avatarImg, containerProps }: AvatarNavProps) => {
  return (
    <div
      className={clsx("flex items-center space-x-4", containerProps?.className)}
    >
      <Avatar
        containerProps={{
          className: "h-[75px] w-[75px] flex-shrink-0 rounded-md object-cover",
        }}
        avatar={avatarImg || undefined}
      />
      <h5 className="text-md font-medium text-tertiary-black">{name || ""}</h5>
    </div>
  );
};

export default AvatarNav;
