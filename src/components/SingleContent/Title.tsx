import { cn } from "@/lib/cn";
import { ESingleContentType } from "./type";


const Title = ({ ...props }) => {

    return (
        <div className="absolute top-[323px]">
            {props.type === ESingleContentType.normal ? (
                <div className="w-[360px] h-[129px] bg-white rounded-b-[10px]">
                    <div
                        className='"w-[150px] h-[61px] text-[25px] pt-[10px] pl-[16px]'>
                        {props.title}
                    </div>
                    <div className="w-[339px] h-[56px] text-[14px] text-black/75 pl-[16px]">
                        {props.comment}
                    </div>
                </div>
            ) : (
                <div className={cn(
                    "absolute left-[9px] h-[117px] bg-white/75 rounded-lg",
                    props.type === ESingleContentType.imgFull ? "w-[339px]" : "w-[724px]"
                )}>
                    <div className='"w-[150px] h-[61px] text-[25px] pt-[5px] pl-[8px]'>
                        {props.title}
                    </div>
                    <div className="w-[auto] h-[56px] text-[14px] text-black/75 ] pl-[8px]">
                        {props.comment}
                    </div>
                </div>
            )}

        </div>
    );
}

export default Title;
