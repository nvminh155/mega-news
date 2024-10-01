import { useEffect, useRef, useState } from "react";

import { Iconfy } from "../Iconfy";
import { ESingleContentType } from "./type";

const Background = ({ ...props }) => {
  const isVideoPlaying = false;
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Cập nhật trạng thái phát khi props thay đổi
  useEffect(() => {
    if (videoRef.current) {
      isVideoPlaying ? videoRef.current.play() : videoRef.current.pause();
      setIsPlaying(isVideoPlaying);
    }
  }, [isVideoPlaying]);

  const togglePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="relative h-full w-full">
      {props.type === ESingleContentType.video ? (
        <div>
          <video
            ref={videoRef}
            src={props.imageUrl}
            className="h-[452px] rounded-[12px]"
            onClick={togglePlay}
          />
          {!isPlaying && (
            <div
              className="absolute left-[300px] top-[150px] cursor-pointer"
              onClick={togglePlay}
            >
              <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-white bg-opacity-75">
                <Iconfy
                  icon="gravity-ui:play-fill"
                  className="size-[48px] text-[#ff0000]"
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <img
          src={props.imageUrl}
          alt={props.title}
          className="absolute h-[452px] w-full rounded-[12px] object-cover"
        />
      )}
    </div>
  );
};

export default Background;
