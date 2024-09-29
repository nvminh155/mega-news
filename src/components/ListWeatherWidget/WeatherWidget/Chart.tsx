import React, { useEffect } from "react";
import * as echarts from "echarts";

export type TWeatherChartProps = {
  label: string[];
  data: number[];
};

const Chart: React.FC<TWeatherChartProps> = ({ label, data }) => {
  let option = {
    tooltip: {
      trigger: "item",
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 30,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      axisLine: {
        show: false,
      },
      axisLabel: {
        fontSize: 14,
      },
      boundaryGap: false,
      data: label,
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
      },
    },
    series: [
      {
        data: data,
        type: "line",
        smooth: true,
        symbolSize: 0,
        label: {
          show: true,
          position: "top",
          formatter: "{c}",
          textStyle: {
            color: "#3E3232BF",
            fontSize: 12,
            fontWeight: 400,
          },
        },
        lineStyle: {
          color: "#FCC54C",
          shadowColor: "#FCC54C",
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 4,
        },
      },
    ],
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
  }, []);

  return <div id="chart-container" className="h-[250px] w-full"></div>;
};

export default Chart;
