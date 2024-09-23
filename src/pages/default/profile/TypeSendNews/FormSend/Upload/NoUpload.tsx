import React from "react";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/cn";
import { Iconfy } from "@/components/Iconfy";

import { TAppUploadProps } from "../AppUpload";

type TNoUploadProps = TAppUploadProps;

const NoUpload: React.FC<TNoUploadProps> = ({ type, size }) => {
  const { t } = useTranslation("upload");

  return (
    <>
      <Iconfy
        icon={type === "image" ? "lets-icons:img-box" : "gridicons:video"}
        className={cn("h-[48px] w-[48px] text-tertiary/25", {
          "h-[96px] w-[96px]": size === "lg",
        })}
      />
      <span className="text-tertiary/75">
        {t(type === "image" ? "Label.drop-image" : "Label.drop-video")}
      </span>
    </>
  );
};

export default NoUpload;
