import { formatDateTime } from "@/utils/formatDatetime";
import useDeviceType from "@/hooks/useDeviceType";
import { Iconfy } from "@/components/Iconfy";

type TInformation = {
  date: number;
  comments: number;
  category: string;
  className?: string;
};

const Information: React.FC<TInformation> = ({
  date = 1656947004000,
  comments = 35,
  category = "Sport",
  className,
}) => {
  const { isDesktop } = useDeviceType();
  const timeFormatted = formatDateTime(date);

  return (
    <div
      className={`flex w-full justify-between text-sm font-medium text-tertiary/75 ${className}`}
    >
      <div className="flex items-center justify-between gap-1">
        <Iconfy icon={"fa:calendar-o"} size={"sm"} />
        <div>
          {isDesktop ? timeFormatted?.YYYYDDMMMM : timeFormatted?.MMMMDDYYYY}
        </div>
      </div>
      <div className="flex items-center justify-between gap-1">
        <Iconfy icon={"fa-regular:comment-dots"} size={"sm"} />
        <div>
          <span className="hidden sm:inline">Comments:</span> {comments}
        </div>
      </div>
      <div className="flex items-center justify-between gap-1">
        <Iconfy icon={"ic:outline-folder"} size={"sm"} />
        <div>
          <span className="hidden sm:inline">Category:</span> {category}
        </div>
      </div>
    </div>
  );
};

export default Information;
