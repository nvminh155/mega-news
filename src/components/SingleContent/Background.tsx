import { useEffect, useRef, useState } from "react";

import { Iconfy } from "../Iconfy";
import { ESingleContentType } from "./type";

const Background = ({ ...props }) => {
  

  return (
    <div className="relative w-full h-full">
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
          className="h-[452px] w-full rounded-[12px] object-cover absolute"
        />
      )}
    </div>
  );
};

export default Background;
