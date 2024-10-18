import React from "react";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/cn";

import { TWeatherChartProps } from "./Chart";
import { TDayWeatherProps } from "./DayWeather";
import WeatherDetail from "./WeatherDetail";

export enum EWeatherStatus {
  sunny = "Sunny",
  sunnyCloudy = "Sunny-Cloudy",
  cloudyLightning = "Cloudy-Lightning",
  cloudyRainy = "Cloudy-Rainy",
  manyCloudsRainy = "ManyClouds-Rainy",
  moonCloudy = "Moon-Cloudy",
  moon = "Moon",
  cloudySleet = "Cloudy-Sleet",
  manyCloudsSleet = "ManyClouds-Sleet",
  manyCloudsLightning = "ManyClouds-Lightning",
}

export type TWeatherWidgetProps = {
  size?: "md" | "lg";
  temperatureToday: number;
  icon: EWeatherStatus;
  precipitation: number;
  humidity: number;
  wind: number;
  location: string;
  time: string;
  background?: string;
  backgroundColor?: string;
  dayWeathers?: TDayWeatherProps[];
  chartData?: TWeatherChartProps;
  className?: string;
};

const WeatherWidget: React.FC<TWeatherWidgetProps> = ({
  size = "lg",
  chartData = { data: [], label: [] },
  dayWeathers = [],
  ...props
}) => {
  const { t } = useTranslation("weather");
  return (
    <div
      className={cn(
        "relative mx-auto w-full rounded-lg p-6 shadow-lg text-nowrap",
        size === "lg" ? "h-[514px]" : "h-[245px]",
        props.className
      )}
    >
      <div
        className="absolute left-0 top-0 z-[-1] h-full w-full rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url("${props.background}"), linear-gradient(${props.backgroundColor})`,
          backgroundBlendMode: "overlay",
        }}
      ></div>
      <div className="flex flex-1">
        <div className="flex flex-1 gap-5">
          {size === "lg" && (
            <>
              <img src={`/WeatherIcons/${props.icon}.svg`} alt={props.icon} />
              <div className="flex">
                <p className="text-5xl">{props.temperatureToday}</p>
                <p>°C</p>
              </div>
            </>
          )}
          <div
            className={cn(
              "text-[12px]",
              size === "lg" ? "text-tertiary/75" : "text-white"
            )}
          >
            <p>
              {t("Precipitation")}: {props.precipitation}%
            </p>
            <p>
              {t("Humidity")}: {props.humidity}%
            </p>
            <p>
              {t("Wind")}: {props.wind} Km/H
            </p>
          </div>
        </div>
        <div className={cn("ml-auto text-end", size === "md" && "text-white")}>
          <p className="text-lg">{props.location}</p>
          <p className="text-sm">{props.time}</p>
        </div>
      </div>
      {size === "lg" ? (
        <WeatherDetail chartData={chartData} dayWeathers={dayWeathers} />
      ) : (
        <div className="mt-11 flex items-center justify-center gap-5 text-white">
          <img src={`/WeatherIcons/${props.icon}-White.svg`} alt={props.icon} />
          <div className="flex">
            <p className="text-5xl">{props.temperatureToday}</p>
            <p>°C</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherWidget;
