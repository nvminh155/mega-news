import { useEffect, useState } from "react";
import i18n from "@/i18n";
import * as echarts from "echarts";

import translateDateWords from "@/utils/formatDatetime";

import { seriesList } from "./getSeriesList";

export type TChartCategory = {
  name: string;
  count: number[];
};
export type TViewPostChartProps = {
  categories: TChartCategory[];
  years: string[];
};

const ViewPostChart: React.FC<TViewPostChartProps> = ({
  categories,
  years,
}) => {
  const [yearsUpdate, setYearsUpdate] = useState(years);

  useEffect(() => {
    const yearsUpdated = years.map((item: string) => {
      return translateDateWords(item);
    });
    setYearsUpdate(yearsUpdated);
  }, [i18n.language, years]);

  const option = {
    tooltip: {
      trigger: "item",
    },
    grid: {
      left: 50,
      right: 60,
      bottom: 30,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      splitLine: {
        show: true,
        lineStyle: {
          width: 15,
          color: "#F5F5F5",
        },
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        margin: 30,
        fontSize: 14,
        fontWeight: 400,
      },
      boundaryGap: false,
      data: yearsUpdate,
    },
    yAxis: {
      type: "value",
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
        lineStype: {
          width: 0,
        },
      },
      inverse: true,
      interval: 1,
      min: 0,
      max: 12,
    },
    series: seriesList({ categories, years: yearsUpdate }),
  };

  const paintChart = () => {
    let dom = document.getElementById("chart-container");
    let myChart = echarts.init(dom, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });
    if (option && typeof option === "object") {
      myChart.setOption(option);
    }

    window.addEventListener("resize", () => myChart.resize());
  };

  useEffect(() => {
    paintChart();
  }, [yearsUpdate]);

  return <div id="chart-container" className="h-[408px] w-full"></div>;
};

export default ViewPostChart;
