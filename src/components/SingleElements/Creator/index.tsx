import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Avatar from "@/components/Avatar/Avatar";
import AppButton from "@/components/Button";
import { Iconfy } from "@/components/Iconfy";
import { TPostCard } from "@/components/PostCard/type";

export type TCreator = {
  avatar: string;
  name?: string;
  posts?: TPostCard[];
};

type TCreatorProps = TCreator;

const Creator: React.FC<TCreatorProps> = ({
  avatar = "/avatar.svg",
  name,
  posts = [],
}) => {
  const navigate = useNavigate();

  const { t } = useTranslation("posts");
  const { t: tInfo } = useTranslation("info");
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <div className="flex w-full flex-row gap-[10px] rounded-lg bg-gray p-[15px]">
      <Avatar
        avatar={avatar}
        containerProps={{
          className: "h-[87px] w-[87px] flex-shrink-0 rounded-md object-cover",
        }}
      />
      <div className="flex w-full flex-col">
        <div className="flex flex-1 items-center justify-between font-semibold">
          <p
            className="line-clamp-1 w-3/4 cursor-pointer text-tertiary-black"
            onClick={() => {
              navigate("/writer/12");
            }}
          >
            {name}
          </p>
          <div className="w-1/4 text-xs text-tertiary/75">
            {`${posts.length} ${posts.length > 1 ? t("post") : t("posts")}`}
          </div>
        </div>
        <AppButton
          className="mt-auto w-max gap-2 text-sm text-popover"
          size={"sm"}
          prefixIcon={<Iconfy icon={"ic:baseline-plus"} size={"lg"} />}
          onClick={() => {
            setIsFollowed(!isFollowed);
          }}
        >
          <div>{isFollowed ? tInfo("follow") : tInfo("unfollow")}</div>
        </AppButton>
      </div>
    </div>
  );
};

export default Creator;
