import { useTranslation } from "react-i18next";

import { cn } from "@/lib/cn";

import { TitleSection } from "../TitleSection";
import Author from "./Author";
import Replies from "./Replies";
import { ECommentSize, TCommentProps } from "./type";

const Comment: React.FC<TCommentProps> = ({
  size = ECommentSize.small,
  ...comment
}) => {
  const { t } = useTranslation("comment");
  return (
    <>
      <TitleSection text={t("comments")} className="mb-[30px]" />
      {size === ECommentSize.small ? (
        <div className="flex w-full flex-col gap-2 rounded-md bg-gray p-4">
          <div className="font-medium">{`${comment.author.firstName} ${comment.author.lastName}`}</div>
          <div className="line-clamp-1 text-[12px] text-tertiary/75">
            {comment.content}
          </div>
        </div>
      ) : (
        <div className="flex w-full flex-col rounded-md bg-gray px-5 py-[15px]">
          <Author
            author={comment.author}
            createdAt={comment.createdAt}
            showReply={true}
          />
          <div
            className={cn(
              "mt-4 text-gray-700 text-secondary-foreground/75",
              comment.replies && "mb-10"
            )}
          >
            {comment.content}
          </div>
          <Replies replies={comment.replies} />
        </div>
      )}
    </>
  );
};

export default Comment;
