import { useLayoutEffect, useRef } from "react";

import Comment from "@/components/Comment";
import { ECommentSize } from "@/components/Comment/type";
import ListPost from "@/components/ListPost";

import FormComment from "./FormComment";
import LeftSingle from "./LeftSingle";
import Sidebar from "./Sidebar";

// import ListPost from "@/components/ListPost";

const DetailsPost = () => {
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (div1Ref.current && div2Ref.current) {
        const width = div1Ref.current.offsetWidth;
        div2Ref.current.style.width = `${width}px`;
        console.log(width);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="w-full flex-row">
      <div className="mb-[40px] flex w-full max-w-full flex-row flex-wrap gap-md max-desktop:flex-col">
        <div className="flex w-full flex-1 flex-col" ref={div1Ref}>
          <LeftSingle />
        </div>
        <div className="order-2 max-desktop:order-3" ref={div2Ref}>
          <Comment
            author={{
              firstName: "tesst",
              lastName: "Pashaei",
              avatarUrl: "/avatar.svg",
            }}
            size={ECommentSize.large}
            createdAt={Date.now()}
            content="asljfasljk"
          />
          <FormComment />
        </div>
        <Sidebar
          creator={{
            avatar: "/background.jfif",
            name: "Behzad Pashaei",
            posts: [
              {
                post: {
                  id: "post1",
                  imageUrl: "/avatar.svg",
                  title: "abc",
                  createdAt: 1726239005000,
                },
              },
            ],
          }}
          tags={[
            {
              id: "1",
              name: "Montenegro",
            },
            {
              id: "2",
              name: "Visit Croatia",
            },
            {
              id: "3",
              name: "Luxury Travel",
            },
            {
              id: "4",
              name: "Travel Log",
            },
            {
              id: "5",
              name: "Paradise Island",
            },
            {
              id: "6",
              name: "Travel Info",
            },
          ]}
        />
      </div>
      <ListPost title="related" />
    </div>
  );
};

export default DetailsPost;
