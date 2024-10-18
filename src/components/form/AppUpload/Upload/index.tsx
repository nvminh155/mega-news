import React from "react";

import Avatar from "@/components/Avatar/Avatar";

import { TAppUploadProps } from "../";
import NoUpload from "./NoUpload";

type TPreviewProps = TAppUploadProps & {
  previewImage?: string;
  previewVideo?: string;
};

const Preview: React.FC<TPreviewProps> = ({
  type = "image",
  size,
  previewImage,
  previewVideo,
}) => {
  return (
    <>
      {type === "image" && previewImage ? (
        <Avatar
          avatar={previewImage}
          containerProps={{
            className: "w-full h-full",
          }}
        />
      ) : type === "video" && previewVideo ? (
        <div className="flex h-5/6 flex-1">
          <video
            src={previewVideo}
            className="max-h-full max-w-full rounded-md p-2"
            controls
          />
        </div>
      ) : (
        <NoUpload type={type} size={size} />
      )}
    </>
  );
};

export default Preview;
