import moment from "moment";

import "moment/dist/locale/vi";
import "moment/dist/locale/es";

import i18n from "@/i18n";

const formatDateTime = (timestamp: number) => {
  const date = moment(timestamp);
  if (i18n.language === "vi") {
    date.locale("vi");
  } else {
    date.locale("en");
  }
  return {
    YYYYDDMMMM: date.format("YYYY DD MMMM"), // 2022 03 March
    MMMMDDYYYY: date.format("ll"), // Sep 5, 2024
  };
};

export { formatDateTime };
