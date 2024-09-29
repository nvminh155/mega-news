import React from "react";

import { TWeatherWidgetProps } from ".";
import Chart from "./Chart";
import DayWeather from "./DayWeather";

type TWeatherDetailProps = Pick<
  TWeatherWidgetProps,
  "chartData" | "dayWeathers"
>;

const WeatherDetail: React.FC<TWeatherDetailProps> = ({
  chartData = { data: [], label: [] },
  dayWeathers = [],
}) => {
  return (
    <>
      <Chart label={chartData.label} data={chartData.data} />
      <div className="flex justify-between">
        {dayWeathers.map((day) => (
          <DayWeather
            id={day.id}
            key={day.id}
            day={day.day}
            status={day.status}
            leftTemperature={day.leftTemperature}
            rightTemperature={day.rightTemperature}
          />
        ))}
      </div>
    </>
  );
};

export default WeatherDetail;
