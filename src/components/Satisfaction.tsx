import moods from "@/constants/moods";

import { Iconfy } from "./Iconfy";

type TSatisfactionProps = {
  month?: string;
  year?: string | number;
  mood?: number;
  points?: number;
};

const Satisfaction = ({
  month = "August",
  year = 2022,
  mood = 0,
  points = 20,
}: TSatisfactionProps) => {
  return (
    <div className="bg-accent-gray flex flex-col items-center gap-sm w-max p-sm rounded-md text-tertiary">
      <span>
        {month} {year}
      </span>
      <Iconfy icon={moods[mood].name} size={"xl"} style={{
        color: moods[mood].color,
      }} />
      <span>{points} Points</span>
    </div>
  );
};

export default Satisfaction;
