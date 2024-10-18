import React from "react";

type ExplanationProps = {
  title: string;
  content: string;
  imageUrl: string;
  alt: string;
};

const Explanation: React.FC<ExplanationProps> = ({
  title,
  content,
  imageUrl,
  alt,
}) => {
  return (
    <div className="rounded-[12px] bg-[#F5F5F5] p-6">
      <p className="mb-[20px] text-[36px] font-normal leading-[42px] text-black">
        {title}
      </p>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <p className="text-justify text-[18px] font-normal leading-[34px] text-tertiary lg:mr-4">
          {content}
        </p>
        <img src={imageUrl} alt={alt} className="h-[444px] rounded-[12px]" />
      </div>
    </div>
  );
};

export default Explanation;
