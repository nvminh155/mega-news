import { EWeatherStatus } from "@/components/ListWeatherWidget/WeatherWidget";

const dayWeather = [
  {
    id: "1",
    day: "Tue",
    status: EWeatherStatus.sunny,
    leftTemperature: 29,
    rightTemperature: 20,
  },
  {
    id: "2",
    day: "Wed",
    status: EWeatherStatus.sunnyCloudy,
    leftTemperature: 29,
    rightTemperature: 20,
  },
  {
    id: "3",
    day: "Thu",
    status: EWeatherStatus.manyCloudsLightning,
    leftTemperature: 29,
    rightTemperature: 20,
  },
  {
    id: "4",
    day: "Fri",
    status: EWeatherStatus.manyCloudsRainy,
    leftTemperature: 29,
    rightTemperature: 20,
  },
  {
    id: "5",
    day: "Sat",
    status: EWeatherStatus.sunnyCloudy,
    leftTemperature: 29,
    rightTemperature: 20,
  },
  {
    id: "6",
    day: "Sun",
    status: EWeatherStatus.moonCloudy,
    leftTemperature: 29,
    rightTemperature: 20,
  },
  {
    id: "7",
    day: "Mon",
    status: EWeatherStatus.cloudyRainy,
    leftTemperature: 29,
    rightTemperature: 20,
  },
  {
    id: "8",
    day: "Tue",
    status: EWeatherStatus.manyCloudsSleet,
    leftTemperature: 29,
    rightTemperature: 20,
  },
];

const weatherWidgetMedium = [
  {
    temperatureToday: 32,
    icon: EWeatherStatus.sunny,
    precipitation: 0,
    humidity: 41,
    wind: 27,
    location: "Ankara",
    time: "Tuesday 2:00 PM",
    background: "/background.jfif",
  },
  {
    temperatureToday: 16,
    icon: EWeatherStatus.manyCloudsSleet,
    precipitation: 18,
    humidity: 32,
    wind: 16,
    location: "Alaska",
    time: "Tuesday 3:00 AM",
    background: "/background.jfif",
  },
  {
    temperatureToday: 24,
    icon: EWeatherStatus.cloudyRainy,
    precipitation: 70,
    humidity: 50,
    wind: 14,
    location: "Berlin",
    time: "Tuesday 1:00 PM",
    background: "/background.jfif",
  },
  {
    temperatureToday: 27,
    icon: EWeatherStatus.moonCloudy,
    precipitation: 10,
    humidity: 44,
    wind: 14,
    location: "Paris",
    time: "Tuesday 10:00 PM",
    background: "/background.jfif",
  },
];

const colors = [
  "rgba(251, 68, 28, 0.91), rgba(251, 202, 28, 0.6)",
  "rgba(28, 50, 251, 0.91), rgba(28, 251, 224, 0.6)",
  "rgba(7, 156, 39, 0.91), rgba(192, 255, 113, 0.6)",
  "rgba(113, 28, 251, 0.91), rgba(251, 28, 148, 0.6)",
];

export { dayWeather, weatherWidgetMedium, colors };
