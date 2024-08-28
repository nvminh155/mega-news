import React from "react";
import { Iconfy } from "../Iconfy";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import {CiLineXl} from "../../../public/CiLineXl"



const TitleSectionVariants = cva(
    "  items-center flex justify-center text-center",
    {
      variants: {
        
        size: {
          default: "py-[20px] px-[10px]  text-[20px]",
        
        },
      },
      defaultVariants: {
        size: "default",
      },
    }
  );

interface TitleSectionProps extends React.ButtonHTMLAttributes<HTMLDivElement>, VariantProps<typeof TitleSectionVariants> {
    className?:string;
    status?:"Default" | "dot" | "simple" | 'line';
}

export const TitleSection: React.FC<TitleSectionProps> = ({
    className,
    size="default",
    children,
    status="Default"
  }) =>{
    return (
        <div className={cn(
            TitleSectionVariants({  size, className }),
          ) 
        } 
        >
       
         {status==="Default"? <CiLineXl className="text-primary" /> : 
         (status==="dot"? <Iconfy icon="mdi:dot" className="text-primary items-center"/> : "" ) 
         } {children} 
        </div>
    )
}