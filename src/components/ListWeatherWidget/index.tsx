import { useEffect, useState } from "react";
import { Carousel } from "antd";
import { useTranslation } from "react-i18next";

import translateDateWords from "@/utils/formatDatetime";
import useDeviceType from "@/hooks/useDeviceType";
import WeatherWidget, {
  EWeatherStatus,
} from "@/components/ListWeatherWidget/WeatherWidget";

import { dayWeather, weatherWidgetMediums } from "./data";

const ListWeatherWidget = () => {
  const colors = [
    "rgba(251, 68, 28, 0.91), rgba(251, 202, 28, 0.6)",
    "rgba(28, 50, 251, 0.91), rgba(28, 251, 224, 0.6)",
    "rgba(7, 156, 39, 0.91), rgba(192, 255, 113, 0.6)",
    "rgba(113, 28, 251, 0.91), rgba(251, 28, 148, 0.6)",
  ];
  const [dayWeatherUpdate, setDayWeatherUpdate] = useState(dayWeather);
  const { i18n } = useTranslation();
  useEffect(() => {
    const dayWeatherUpdated = dayWeatherUpdate.map((item) => {
      return { ...item, day: translateDateWords(item.day, true) };
    });
    setDayWeatherUpdate(dayWeatherUpdated);
  }, [i18n.language]);

  const { isDesktop } = useDeviceType();
  return (
    <div className="flex w-full flex-row gap-6">
      <div className="hidden w-1/2 flex-1 rounded-lg desktop:block">
        <div className="w-full">
          <WeatherWidget
            dayWeathers={dayWeatherUpdate}
            temperatureToday={29}
            icon={EWeatherStatus.sunny}
            precipitation={2}
            humidity={70}
            wind={3}
            location="New York, NY"
            time={translateDateWords("Wednesday 04:00")}
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

      <div className="w-full desktop:grid desktop:w-1/2 desktop:grid-cols-2 desktop:gap-6">
        {isDesktop ? (
          weatherWidgetMediums.map((item, index) => (
            <div className="w-full rounded-lg">
              <WeatherWidget
                size="md"
                temperatureToday={item.temperatureToday}
                icon={item.icon}
                precipitation={item.precipitation}
                humidity={item.humidity}
                wind={item.wind}
                location={item.location}
                time={translateDateWords(item.time)}
                background={item.background}
                backgroundColor={colors[index]}
              />
            </div>
          ))
        ) : (
          <Carousel autoplay>
            {weatherWidgetMediums.map((item, index) => (
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
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default ListWeatherWidget;
