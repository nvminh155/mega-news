import React from "react";

import Information from "@/components/SingleElements/Information";

import postData from "./postData.json";

type TImageProps = {
  title: string;
  mainImageUrl: string;
  alt?: string;
};

const ImgProps: React.FC<TImageProps> = ({ title, mainImageUrl, alt = "" }) => {
  return (
    <div className="w-full rounded-md bg-[#F5F5F5] px-4">
      <p className="pt-[13px] text-[24px] tablet:text-[33px]">{title}</p>
      <img
        src={mainImageUrl}
        alt={alt}
        className="mt-[-27px] max-h-[600px] w-full translate-y-[40px] rounded-md object-cover"
      />
    </div>
  );
};

const LeftSingle: React.FC = () => {
  const post = postData;

  return (
    <div className="flex flex-1 flex-col gap-3">
      <ImgProps
        title={post.title}
        mainImageUrl={post.mainImageUrl}
        alt={post.altImageUrl}
      />

      <Information
        date={post.date}
        comments={post.comments}
        category={post.category}
        className="mx-auto mt-[50px] max-w-[516px]"
      />

      <div className="mt-[40px] px-4">
        {post.content.map((section, index) => (
          <div key={index + 1}>
            <p className="mb-md capitalize desktop:text-[20px]">
              {section.heading}
            </p>
            <p className="mb-md text-tertiary">{section.paragraph}</p>
            {index === 0 && (
              <div className="mb-lg  flex flex-col items-center">
                <img
                  src={post.subImages}
                  alt={post.subImageUrl}
                  className="max-h-[600px] w-full rounded-md object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSingle;
