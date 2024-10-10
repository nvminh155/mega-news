import WeatherWidget, {
  EWeatherStatus,
} from "@/components/ListWeatherWidget/WeatherWidget";

import { colors, dayWeather, weatherWidgetMedium } from "./data";

const ListWeatherWidget = () => {
  return (
    <div className="flex w-full flex-row gap-6 py-md">
      <div className="w-1/2 flex-1 rounded-lg">
        <div className="w-full">
          <WeatherWidget
            dayWeathers={dayWeather}
            temperatureToday={29}
            icon={EWeatherStatus.sunny}
            precipitation={2}
            humidity={70}
            wind={3}
            location="New York, NY"
            time="Wednesday 04:00"
            chartData={{
              label: [
                "5 AM",
                "8 AM",
                "11 AM",
                "2 PM",
                "5 PM",
                "8 PM",
                "11 PM",
                "2 AM",
              ],
              data: [27, 19, 20, 25, 21, 28, 29, 21],
            }}
          />
        </div>
      </div>

      <div className="grid w-1/2 grid-cols-2 gap-6">
        {weatherWidgetMedium.map((item, index) => (
          <div className="w-full rounded-lg">
            <WeatherWidget
              size="md"
              temperatureToday={item.temperatureToday}
              icon={item.icon}
              precipitation={item.precipitation}
              humidity={item.humidity}
              wind={item.wind}
              location={item.location}
              time={item.time}
              background={item.background}
              backgroundColor={colors[index]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListWeatherWidget;
