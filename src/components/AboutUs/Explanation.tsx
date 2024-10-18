import React from 'react';

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
    alt
}) => {
    return (
        <div className=" bg-[#F5F5F5] rounded-[12px] p-6">
            <p className="font-normal text-[36px] leading-[42px] text-black mb-[20px]">
                {title}
            </p>
            <div className='flex flex-col lg:flex-row lg:justify-between'>
                <p className='font-normal text-[18px] leading-[34px] lg:mr-4 text-justify text-[#3E3232]'>
                    {content}
                </p>
                <img src={imageUrl} alt={alt} className='h-[444px] rounded-[12px]' />
            </div>
        </div>
    );
};

export default Explanation;
