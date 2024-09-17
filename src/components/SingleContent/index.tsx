import React, { useState } from 'react';
import { cn } from '@/lib/cn';

import { ESingleContentType, TSingleContentCart } from './type';
import Background from './Background';
import Title from './Title';


const ContentCart: React.FC<TSingleContentCart> = ({
    content,
    type = ESingleContentType.imgFull,
}) => {

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleClick = (_e: React.MouseEvent) => {
        if (type === ESingleContentType.video) {
            setIsVideoPlaying(!isVideoPlaying);
        }
        
    };
    
    return (
        <div className={cn(
            'relative m-[10px]',
            type === ESingleContentType.video ? "w-[744px] h-[444px]" :
                type === ESingleContentType.normal ? "w-[360px] h-[315px]" :
                    "w-[360px] h-[452px]"
        )}
            onClick={handleClick}
        >

            <Background
                type={type}
                imageUrl={content.contentUrl}
                title={content.alt}
                isVideoPlaying={isVideoPlaying}
            />

            {!isVideoPlaying && (
                <Title
                    type={type}
                    title={content.title}
                    comment={content.comment}
                />
            )}
        </div>
    );
}

export default ContentCart;
