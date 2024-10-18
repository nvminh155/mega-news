import { EWeatherStatus } from ".";

export type TDayWeatherProps = {
  id: string;
  day: string;
  status: EWeatherStatus;
  leftTemperature: number;
  rightTemperature: number;
};

const DayWeather: React.FC<TDayWeatherProps> = ({ ...props }) => {
  return (
    <div className="flex w-[81px] flex-col items-center justify-center gap-[10px] p-[10px]">
      <div>{props.day}</div>
      <div className="h-11 w-11">
        <img src={`/WeatherIcons/${props.status}.svg`} alt={props.status} />
      </div>
      <div className="flex w-full justify-between">
        <div className="text-tertiary">{props.leftTemperature}°</div>
        <div className="text-tertiary/50">{props.rightTemperature}°</div>
      </div>
    </div>
  );
};

export default DayWeather;
