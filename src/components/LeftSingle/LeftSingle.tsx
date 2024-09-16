import React from 'react';
import postData from './postData.json';
import Information from '../SingleElements/Information';

type TImageProps = {
  title: string;
  mainImageUrl: string;
  alt?: string;
};

const ImgProps: React.FC<TImageProps> = ({ title, mainImageUrl, alt = "" }) => {
  return (
    <div className="bg-[#F5F5F5] rounded-md mx-auto">
      <div className="w-full max-w-[1064px] mx-auto px-4">
        <p className="text-[24px] tablet:text-[33px] pt-[13px]">{title}</p>
        <img
          src={mainImageUrl}
          alt={alt}
          className="w-full max-h-[1000px] mt-[-27px] mx-auto rounded-md translate-y-[40px]"
        />
      </div>
    </div>
  );
};

const LeftSingle: React.FC = () => {
  const post = postData;

  return (
    <div className="w-full">
      <div className="w-full max-w-[1129px] mx-auto">

        <ImgProps
          title={post.title}
          mainImageUrl={post.mainImageUrl}
          alt={post.altImageUrl}
        />

        <Information
          date={post.date}
          comments={post.comments}
          category={post.category}
          className="w-full max-w-[516px] mt-[50px] mx-auto"
        />

        <div className="w-full max-w-[1068px] mt-[40px] px-4 mx-auto">
          {post.content.map((section, index) => (
            <div key={index}>
              <p className="capitalize mb-[15px] leading-[23px] text-[16px] desktop:text-[20px]">{section.heading}</p>
              <p className="text-[#3E3232] mb-[25px]">{section.paragraph}</p>
              {index === 0 && (
                <div className="flex flex-col items-center mb-[30px]">
                  <img src={post.subImages} alt={post.subImageUrl} className="rounded-md w-full max-h-[1000px]" />
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
