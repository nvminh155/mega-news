import React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const avatarVariants = cva(
  "flex flex-col bg-white items-center justify-evenly shadow-lg rounded-xl w-full pt-5 pb-[10px] px-[10px]",
  {
    variants: {
      type: {
        default: "hidden",
        inside: "h-full",
        "half-side": "absolute h-[206px] bottom-0",
      },
    },
    defaultVariants: {
      type: "default",
    },
  }
);

type AvatarWrapperProps = VariantProps<typeof avatarVariants> & {
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  job?: string;
  name?: string;
  avatar?: string;
};

const Avatar: React.FC<AvatarWrapperProps> = ({
  type = "default",
  containerProps,
  job = "Designer",
  name = "Jon Kantner",
  avatar = "/avatar.svg",
}) => {
  return (
    <div
      className={cn(
        "h-[266px] w-[500px] max-w-[232px]",
        {
          relative: type === "half-side",
        },
        containerProps?.className
      )}
    >
      {type === "default" && (
        <img
          className={cn(
            "h-full w-full object-cover",
            containerProps?.className
          )}
          src={avatar}
          alt="avatar"
        />
      )}

      <div className={cn(avatarVariants({ type }))}>
        <img
          className={cn({
            "absolute -top-1/2 translate-y-1/2": type === "half-side",
          })}
          src={avatar}
          alt="avatar"
        />
        <p className="mt-auto py-6 text-xs font-semibold text-tertiary/75">
          {job}
        </p>
        <button className="w-full rounded-xl bg-[#F5F5F5] p-3 font-semibold text-tertiary">
          {name}
        </button>
      </div>
    </div>
  );
};

export default Avatar;
