import Comment from "@/components/Comment";
import { ECommentSize } from "@/components/Comment/type";

const ListComment = () => {
  return (
    <div>
      <div className="w-[360px]">
        <Comment
          author={{
            firstName: "Behzad",
            lastName: "Pashaei",
          }}
          content="Choose from over 1,200 WordPress blog themes & magazine themes. Explore items created by our global community of independent designers and developers, confident they're hand-reviewed by us."
        />
      </div>
      <div className="mx-auto mt-10 max-w-[1128px]">
        <Comment
          author={{
            firstName: "Behzad",
            lastName: "Pashaei",
            avatarUrl: "/avatar.svg",
          }}
          content="Choose from over 1,200 WordPress blog themes & magazine themes. Explore items created by our global community of independent designers and developers, confident they're hand-reviewed by us."
          size={ECommentSize.large}
          createdAt={1725891900000}
        />
      </div>
      <div className="mx-auto mt-10 max-w-[1128px]">
        <Comment
          author={{
            firstName: "Behzad",
            lastName: "Pashaei",
            avatarUrl: "/avatar.svg",
          }}
          content="Choose from over 1,200 WordPress blog themes & magazine themes. Explore items created by our global community of independent designers and developers, confident they're hand-reviewed by us."
          size={ECommentSize.large}
          replies={[
            {
              author: {
                firstName: "Behzad",
                lastName: "Pashaei",
                avatarUrl: "/avatar.svg",
              },
              content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, cumque. Maiores repellat fugiat saepe. Soluta, non in! Laboriosam dolorum, fugit dolor, minus aut, molestias rerum ipsam explicabo commodi exercitationem pariatur!",
              createdAt: 1725891900000,
            },
            {
              author: {
                firstName: "Behzad",
                lastName: "Pashaei",
                avatarUrl: "/avatar.svg",
              },
              content:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, cumque. Maiores repellat fugiat saepe. Soluta, non in! Laboriosam dolorum, fugit dolor, minus aut, molestias rerum ipsam explicabo commodi exercitationem pariatur!",
              createdAt: 1725891900001,
            },
          ]}
          createdAt={1725891900000}
        />
      </div>
    </div>
  );
};

export default ListComment;
