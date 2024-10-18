import { cn } from "@/lib/cn";
import AppButton from "@/components/Button";
import { Iconfy } from "@/components/Iconfy";

import "react-quill/dist/quill.snow.css";

import { useState } from "react";
import {
  GetProp,
  Upload,
  // UploadFile,
  UploadProps,
} from "antd";
import { useTranslation } from "react-i18next";

import Avatar from "@/components/Avatar/Avatar";

import Preview from "./Upload";

// type TForm = {
//   title: string;
//   tags: string[];
//   explanation: string;
//   images: string[];
// };

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
export type TAppUploadProps = {
  type?: "video" | "image";
  size?: "sm" | "lg";
  defaultPreviewUrl?: string;
  onChangeCallback?: (value: any, type?: "video" | "image") => void;
  className?: string;
};

const AppUpload = ({
  type = "image",
  size = "sm",
  defaultPreviewUrl,
  onChangeCallback,
  className,
}: TAppUploadProps) => {
  // const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>(
    defaultPreviewUrl || ""
  );
  const [previewVideo, setPreviewVideo] = useState<string>(
    defaultPreviewUrl || ""
  );

  const [isHovered, setIsHovered] = useState<boolean>(false);
  // const [fileList, setFileList] = useState<UploadFile[]>([
  //   {
  //     uid: "-1",
  //     name: "image.png",
  //     status: "done",
  //     url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  //   },
  // ]);

  // ;

  const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  // const handlePreview = async (file: UploadFile) => {
  //   if (!file.url && !file.preview) {
  //     file.preview = await getBase64(file.originFileObj as FileType);
  //   }

  //   setPreviewImage(file.url || (file.preview as string));
  //   setPreviewOpen(true);
  // };

  const handleChange: UploadProps["onChange"] = async ({
    // fileList: newFileList,
    file,
  }) => {
    // setFileList(newFileList);
    if (file.status === "done" || file.status === "error") {
      const fileUrl = await getBase64(file.originFileObj as FileType);

      if (onChangeCallback) onChangeCallback(fileUrl, type);
      if (type === "image") {
        setPreviewImage(fileUrl);
      } else {
        setPreviewVideo(fileUrl);
      }
    }
  };

  const removeImage = () => {
    if (!defaultPreviewUrl) return;

    if (onChangeCallback) onChangeCallback(previewImage);
    if (size === "sm") {
      setPreviewImage("");
    }
  };
  const { t } = useTranslation("upload");
  return (
    <div
      className={cn(
        "img relative h-full w-full rounded-md bg-accent-gray p-sm",
        {
          "min-w-[360px] tablet:min-h-[360px] tablet:max-w-[564px] desktop:max-h-[319px] desktop:max-w-[319px]":
            size === "lg",
          "h-[131px] w-[131px]": size === "sm",
        },
        {
          "cursor-pointer": previewImage && isHovered,
        },
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={removeImage}
    >
      {size === "sm" && previewImage && isHovered && (
        <Iconfy
          icon={"ion:trash-outline"}
          size={"xl"}
          className="absolute bottom-0 left-0 right-0 top-0 z-30 mx-auto my-auto text-white"
        />
      )}
      <Upload
        listType="picture-card"
        // onPreview={handlePreview}
        onChange={handleChange}
        rootClassName="w-full h-full *:!h-full *:!w-full"
        className={cn("*:*:!h-full *:*:!w-full")}
        maxCount={1}
        showUploadList={false}
        disabled={previewImage.length > 0 && size === "sm"}
      >
        {size === "lg" ? (
          <div
            className={cn(
              "flex h-[360px] w-full flex-col items-center gap-5 rounded-md py-20",
              { "py-3": previewVideo.length > 0 && type === "video" }
            )}
          >
            <Preview
              type={type}
              size={size}
              previewImage={previewImage}
              previewVideo={previewVideo}
            />
            <AppButton
              className="w-max px-5 text-tertiary/75"
              prefixIcon={<Iconfy icon={"ic:outline-plus"} />}
            >
              {t("Select")}
            </AppButton>
          </div>
        ) : (
          <>
            {previewImage ? (
              <Avatar
                avatar={previewImage}
                containerProps={{
                  className: `w-full h-full cursor-pointer ${previewImage && isHovered && "filter blur-sm"}`,
                }}
              />
            ) : (
              <Iconfy
                icon={
                  type === "image" ? "lets-icons:img-box" : "gridicons:video"
                }
                className={cn("h-[48px] w-[48px] text-tertiary/25")}
              />
            )}
          </>
        )}
      </Upload>
    </div>
  );
};

export default AppUpload;
