import React from "react";
import { Iconfy } from "../Iconfy";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import {CiLineXl} from "../../../public/CiLineXl"

const ElementMenuVariants = cva(
    " items-center flex justify-center text-center",
    {
      variants: {
        status: {
            MegaMenItem:"text-[16px] font-bold",
            MenItemSub:"text-[13px] hover:text-primary",
            MenItemIcon: "text-[13px] hover:text-primary gap-[6px]",
            FooterMenItem:"!text-[12px] hover:text-primary",
        },
        size: {
            
          default: "py-[20px] px-[10px]",
        
        },
      },
      defaultVariants: {
        size: "default",
      },
    }
  );

interface ElementMenuProps extends React.ButtonHTMLAttributes<HTMLDivElement>, VariantProps<typeof ElementMenuVariants> {
    className?:string;
    
}

export const ElementMenu: React.FC<ElementMenuProps> = ({
    className,
    size="default",
    children,
    status,
  }) =>{
    return (
        <div className={cn(
            ElementMenuVariants({status,  size, className }),
          ) 
        } 
        >
 
         {status==="MegaMenItem"?  <CiLineXl className="text-primary" /> : 
         (status==="MenItemIcon"? <Iconfy icon="lucide:smile" className=" items-center"/> : "" ) 
         } {children} 
        </div>
    )
}