import React, { useState } from "react";

import { cn } from "@/lib/cn";

import Background from "./Background";
import Title from "./Title";
import { ESingleContentType, TSingleContentCart } from "./type";

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
    <div
      className={cn(
        "relative mx-[10px]",
        type === ESingleContentType.video
          ? "h-[444px] max-w-[744px]"
          : type === ESingleContentType.normal
            ? "h-[315px] max-w-[360px]"
            : "h-[452px] max-w-[360px]"
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
        <Title type={type} title={content.title} comment={content.comment} />
      )}
    </div>
  );
};

export default ContentCart;
