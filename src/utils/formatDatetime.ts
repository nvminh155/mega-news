import moment from "moment";

moment.locale();

export default function formatDateTime(timestamp: number) {
  return {
    YYYYDDMMMM: moment(timestamp).format("YYYY DD MMMM"), // 2022 03 March
    MMMMDDYYYY: moment(timestamp).format("ll"), // Sep 5, 2024
  };
}
