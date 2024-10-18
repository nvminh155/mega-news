import React from "react";
import { useTranslation } from "react-i18next";

import Information from "../SingleElements/Information";
import postData from "./postData.json";

type TImageProps = {
  title: string;
  mainImageUrl: string;
  alt?: string;
};

const ImgProps: React.FC<TImageProps> = ({ title, mainImageUrl, alt = "" }) => {
  return (
    <div className="mx-auto rounded-md bg-[#F5F5F5]">
      <div className="mx-auto w-full max-w-[1064px] px-4">
        <p className="pt-[13px] text-[24px] tablet:text-[33px]">{title}</p>
        <img
          src={mainImageUrl}
          alt={alt}
          className="mx-auto mt-[-27px] max-h-[1000px] w-full translate-y-[40px] rounded-md"
        />
      </div>
    </div>
  );
};

const LeftSingle: React.FC = () => {
  const { t } = useTranslation("info");

  const post = postData;

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-[1129px]">
        <ImgProps
          title={post.title}
          mainImageUrl={post.mainImageUrl}
          alt={post.altImageUrl}
        />

        <div className="mx-auto mt-[50px] w-full max-w-[516px]">
          <Information data={post.date} icon="lets-icons:date-fill" />
          <Information
            data={post.comments}
            icon="lets-icons:date-fill"
            labelProps={{
              text: t("comments"),
            }}
          />
          <Information
            data={post.category}
            icon="material-symbols-light:folder"
            labelProps={{
              text: t("category"),
            }}
          />
        </div>

        <div className="mx-auto mt-[40px] w-full max-w-[1068px] px-4">
          {post.content.map((section, index) => (
            <div key={index + 1}>
              <p className="mb-[15px] text-[16px] capitalize leading-[23px] desktop:text-[20px]">
                {section.heading}
              </p>
              <p className="mb-[25px] text-[#3E3232]">{section.paragraph}</p>
              {index === 0 && (
                <div className="mb-[30px] flex flex-col items-center">
                  <img
                    src={post.subImages}
                    alt={post.subImageUrl}
                    className="max-h-[1000px] w-full rounded-md"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSingle;
