import { TChartCategory } from ".";

const categories: TChartCategory[] = [
  {
    name: "Real Estate",
    count: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    name: "Public Administration",
    count: [2, 3, 4, 5, 6, 7, 8, 1],
  },
  {
    name: "Education",
    count: [3, 4, 5, 6, 7, 8, 1, 2],
  },
  {
    name: "Health",
    count: [4, 5, 6, 7, 8, 1, 2, 3],
  },
  {
    name: "Other Services",
    count: [5, 6, 7, 8, 1, 2, 3, 4],
  },
] as const;

const years: string[] = [
  "March 2022",
  "April 2022",
  "May 2022",
  "June 2022",
  "July 2022",
  "August 2022",
  "September 2022",
  "October 2022",
];

export { categories, years };
