import React from 'react';
import { TitleSection } from '../TitleSection';
import { Iconfy } from '../Iconfy';

const Contact: React.FC = () => {
    return (
        <div className='lg:max-w-[1200px] flex items-center justify-between mt-[30px] flex-wrap'>

            <div className=' h-[361px] bg-gray-100 rounded-r-[50px] flex items-center'>
                <div className='h-[297px] max-w-[840px]'>map</div>
            </div>


            <div className="relative text-tertiary text-[13px] md:mt-[20px]">
                <TitleSection text="Mega news information" className='mb-8 justify-start' />

                <span className='absolute w-[4px] h-[195px] left-0 top-[37px] rounded-[12px] bg-[#F5F5F5] '></span>

                <div className='ml-[10px]'>
                    <div className="flex items-center gap-2 mb-7 ">
                        <Iconfy icon="oui:email" size={'sm'} />
                        <span className="font-medium">Email : Management@Mega.News</span>
                    </div>
                    <div className="flex items-center gap-2 mb-7 ">
                        <Iconfy icon="lucide:smartphone" size={'sm'} />
                        <span className="font-medium">Phone Number : +1(234) 567-8910</span>
                    </div>
                    <div className="flex items-center gap-2 mb-7 ">
                        <Iconfy icon="material-symbols-light:fax-sharp" size={'sm'} />
                        <span className="font-medium">Fax : +1(234) 567-8910</span>
                    </div>
                    <div className="flex items-center gap-2 mb-8 ">
                        <Iconfy icon="streamline:location-target-1-solid" size={'sm'} />
                        <span className="font-medium">Address : 1234 Foxrun St. New Lenox, IL 123456</span>
                    </div>
                </div>

                <div className='h-[40px] items-center justify-center flex gap-2 bg-[#F5F5F5] rounded-[12px]'>
                    <Iconfy icon="tabler:clock" size={'sm'} />
                    <span className="font-medium">Responding 24 hours a day, 7 days a week</span>
                </div>
            </div>
        </div>
    );
};

export default Contact;