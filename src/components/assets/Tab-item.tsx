import React from "react";
import { Iconfy } from "../Iconfy";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";



const TabItemVariants = cva(
    "ml-[6px] max-h-[39px] items-center flex justify-center text-[16px] text-center",
    {
      variants: {
        status: {
            enabled: "bg-Gray rounded-[12px] ",
            disabled: " "
        },
        size: {
          default: "py-[10px] px-[20px]",
          sm: "px-4 py-2",
          lg: "px-8 py-4",
          icon: "h-max w-max p-2",
        },
      },
      defaultVariants: {
        status: "disabled",
        size: "default",
      },
    }
  );

interface ITabItemProps extends React.ButtonHTMLAttributes<HTMLElement>, VariantProps<typeof TabItemVariants> {
    className?:string;

}

export const TabItem: React.FC<ITabItemProps> = ({
    className,
    status="enabled",
    size="default",
    children,
  }) =>{
    return (
        <div className={cn(
            TabItemVariants({ status, size, className }),
          ) 
        } 
        >
       
         {status==="enabled"? <Iconfy icon="mdi:dot" className="text-primary items-center"/> : "" } {children} 
        </div>
    )
}