import React from "react";

import Author from "./Author";
import { TCommentProps } from "./type";

type TReplies = Pick<TCommentProps, "replies">;

const Replies: React.FC<TReplies> = ({ replies }) => {
  return (
    <>
      {replies && (
        <div className="mx-auto flex w-5/6 flex-col gap-9 rounded-md bg-background p-4 shadow-md">
          {replies.map((reply) => (
            <div key={reply.createdAt}>
              <Author author={reply.author} createdAt={reply.createdAt} />
              <div className="mt-4 text-gray-700 text-secondary-foreground/75">
                {reply.content}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Replies;
