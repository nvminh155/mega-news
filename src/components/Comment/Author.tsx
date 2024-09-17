import { useTranslation } from "react-i18next";

import { formatDateTime } from "@/utils/formatDatetime";

import Avatar from "../Avatar/Avatar";
import AppButton from "../Button";
import { Iconfy } from "../Iconfy";
import { TCommentProps } from "./type";

type TAuthorProps = Pick<TCommentProps, "author" | "createdAt"> & {
  showReply?: boolean;
};

const Author: React.FC<TAuthorProps> = ({
  showReply = false,
  author,
  createdAt,
}) => {
  const { t } = useTranslation("comment");

  const timeFormatted = createdAt ? formatDateTime(createdAt).YYYYDDMMMM : "";

  return (
    <div className="flex w-full flex-1 flex-row gap-[10px]">
      <Avatar
        avatar={author.avatarUrl}
        containerProps={{
          className: "h-[60px] w-[60px] flex-shrink-0 rounded-md object-cover",
        }}
      />
      <div className="flex w-full flex-col">
        <div className="flex flex-1 items-center justify-between">
          <div>
            <div className="font-medium">{`${author.firstName} ${author.lastName}`}</div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Iconfy icon={"fa:calendar-o"} size={"sm"} />
              <span>{timeFormatted}</span>
            </div>
          </div>
          {showReply && (
            <AppButton
              className="bg-tertiary/5 px-4 py-[10px]"
              variant={"destructive"}
            >
              <div className="flex items-center justify-center gap-2 text-tertiary/75">
                <Iconfy
                  icon={"icomoon-free:reply"}
                  size={"sm"}
                  className="rotate-180"
                />
                <div className="text-sm">{t("reply")}</div>
              </div>
            </AppButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default Author;
