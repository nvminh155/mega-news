import { cn } from "@/lib/cn";
import AppButton from "@/components/Button";
import { Iconfy } from "@/components/Iconfy";

import "react-quill/dist/quill.snow.css";

import { useState } from "react";
import { GetProp, Upload, UploadFile, UploadProps } from "antd";
import { useTranslation } from "react-i18next";

// type TForm = {
//   title: string;
//   tags: string[];
//   explanation: string;
//   images: string[];
// };

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];
type TAppUploadProps = {
  type?: "video" | "image";
  size?: "sm" | "lg";
};

const AppUpload = ({ type = "image", size = "sm" }: TAppUploadProps) => {
  const { t } = useTranslation("upload");

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  console.log("test -> ", previewImage, previewOpen, fileList);

  const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  return (
    <div
      className={cn(
        "img h-full max-h-[131px] w-full max-w-[131px] rounded-md bg-accent-gray p-sm",
        {
          "max-h-[319px] max-w-[319px]": size === "lg",
        }
      )}
    >
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-card"
        onPreview={handlePreview}
        onChange={handleChange}
        rootClassName="w-full h-full *:!h-full *:!w-full"
        className={cn("max-h-[319px] max-w-[319px] *:*:!h-full *:*:!w-full", {
          "max-h-[131px] max-w-[131px]": size === "sm",
        })}
      >
        {size === "lg" ? (
          <div className="flex flex-col items-center gap-3 rounded-md py-10">
            <Iconfy
              icon={type === "image" ? "lets-icons:img-box" : "gridicons:video"}
              className={cn("h-[48px] w-[48px] text-tertiary/25", {
                "h-[96px] w-[96px]": size === "lg",
              })}
            />
            <span className="text-tertiary/75">
              {t(type === "image" ? "Label.drop-image" : "Label.drop-video")}
            </span>
            <AppButton
              className="w-max text-tertiary/75"
              prefixIcon={<Iconfy icon={"ic:outline-plus"} />}
            >
              Select
            </AppButton>
          </div>
        ) : (
          <Iconfy
            icon={type === "image" ? "lets-icons:img-box" : "gridicons:video"}
            className={cn("h-[48px] w-[48px] text-tertiary/25")}
          />
        )}
      </Upload>
    </div>
  );
};

export default AppUpload;
