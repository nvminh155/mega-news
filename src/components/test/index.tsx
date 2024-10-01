import { useEffect, useRef, useState } from "react";

import { Iconfy } from "../Iconfy";
import { cn } from "@/lib/cn";

type TSingleContentProps = {
  type?: "bg-img" | "bg-video" | "card-img";
  srcImg?: string;
  srcVideo?: string;
  title: string;
  content: string;
  className?: string;
};

const SingleContent = ({ type = "bg-img", srcImg="/content.png", title, content, srcVideo = "suTuCuoi.mp4", className }: TSingleContentProps) => {
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
    <>
      {type === "bg-img" && (
        <div className={cn("relative h-[452px] w-full max-w-[360px]", className)}>
          <img
            src={srcImg}
            alt="content"
            className="absolute h-full w-full rounded-md object-cover z-"
          />
          <div className="absolute bottom-[12px] w-full px-sm">
            <div className="w-full rounded-md bg-white bg-opacity-50 p-4">
              <h1 className="text-xl font-medium">{title}</h1>
              <p className="text-sm text-black/75">{content}</p>
            </div>
          </div>
        </div>
      )}

      {type === "card-img" && (
        <div className="flex max-h-[452px] max-w-[360px] flex-col rounded-bl-md rounded-br-md shadow-lg">
          <img
            src={srcImg}
            alt="content"
            className="max-h-[360px] flex-1 rounded-md object-cover"
          />
          <div className="h-max w-full rounded-md bg-white p-md">
            <h1 className="mb-3 text-xl font-medium">{title}</h1>
            <p className="text-sm text-black/75">{content}</p>
          </div>
        </div>
      )}

      {type === "bg-video" && (
        <div className="relative h-max max-h-[452px] max-w-[744px]">
          {isPlaying && (
            <video
              ref={videoRef}
              src={srcVideo}
              className="w-full"
              onClick={togglePlay}
              autoPlay
            />
          )}

          {!isPlaying && (
            <>
              <div
                className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                onClick={togglePlay}
              >
                <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-white bg-opacity-75">
                  <Iconfy
                    icon="ph:play-fill"
                    className="size-[48px] text-primary"
                  />
                </div>
              </div>
              <img
                src={srcImg}
                alt="content"
                className="max-h-[452px] w-full rounded-md object-cover"
              />
            </>
          )}

          <div className="absolute bottom-[12px] w-full px-sm">
            <div className="w-full rounded-md bg-white bg-opacity-50 p-4">
              <h1 className="text-xl font-medium">{title}</h1>
              <p className="text-sm text-black/75">{content}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleContent;
