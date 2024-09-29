import { SeriesOption } from "echarts";

import { TViewPostChartProps } from ".";

type TChart = TViewPostChartProps;

const getData = (data: TChart): Map<string, number[]> => {
  const map: Map<string, number[]> = new Map();

  for (const _ of data.years) {
    data.categories.forEach((category) => {
      map.set(
        category.name,
        (map.get(category.name) || []).concat(category.count)
      );
    });
  }
  return map;
};

const seriesList = (data: TChart): SeriesOption[] => {
  const seriesList: SeriesOption[] = [];
  const list = getData(data);

  list.forEach((data, name) => {
    const series: SeriesOption = {
      name,
      symbolSize: 15,
      type: "line",
      smooth: true,
      emphasis: {
        focus: "series",
      },
      endLabel: {
        show: false,
      },
      lineStyle: {
        width: 2,
      },
      data,
    };
    seriesList.push(series);
  });
  return seriesList;
};

export { seriesList };
