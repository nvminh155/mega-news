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


const translateDateWords = (input: string, useShort?: boolean) => {
  const translationsEnToVi: { [key: string]: string } = {
    'monday': useShort ? 'Thứ 2' : 'Thứ hai',
    'mon': useShort ? 'Thứ 2' : 'Thứ hai',
    'tuesday': useShort ? 'Thứ 3' : 'Thứ ba',
    'tue': useShort ? 'Thứ 3' : 'Thứ ba',
    'wednesday': useShort ? 'Thứ 4' : 'Thứ tư',
    'wed': useShort ? 'Thứ 4' : 'Thứ tư',
    'thursday': useShort ? 'Thứ 5' : 'Thứ năm',
    'thu': useShort ? 'Thứ 5' : 'Thứ năm',
    'friday': useShort ? 'Thứ 6' : 'Thứ sáu',
    'fri': useShort ? 'Thứ 6' : 'Thứ sáu',
    'saturday': useShort ? 'Thứ 7' : 'Thứ bảy',
    'sat': useShort ? 'Thứ 7' : 'Thứ bảy',
    'sunday': useShort ? 'CN' : 'Chủ nhật',
    'sun': useShort ? 'CN' : 'Chủ nhật',
    'january': useShort ? 'T1' : 'Tháng 1',
    'february': useShort ? 'T2' : 'Tháng 2',
    'march': useShort ? 'T3' : 'Tháng 3',
    'april': useShort ? 'T4' : 'Tháng 4',
    'may': useShort ? 'T5' : 'Tháng 5',
    'june': useShort ? 'T6' : 'Tháng 6',
    'july': useShort ? 'T7' : 'Tháng 7',
    'august': useShort ? 'T8' : 'Tháng 8',
    'september': useShort ? 'T9' : 'Tháng 9',
    'october': useShort ? 'T10' : 'Tháng 10',
    'november': useShort ? 'T11' : 'Tháng 11',
    'december': useShort ? 'T12' : 'Tháng 12'
  };

  const translationsViToEn: { [key: string]: string } = {
    'thứ hai': useShort ? 'Mon' : 'Monday',
    'thứ 2': 'Mon',
    'thứ ba': useShort ? 'Tue' : 'Tuesday',
    'thứ 3': 'Tue',
    'thứ tư': useShort ? 'Wed' : 'Wednesday',
    'thứ 4': 'Wed',
    'thứ năm': useShort ? 'Thu' : 'Thursday',
    'thứ 5': 'Thu',
    'thứ sáu': useShort ? 'Fri' : 'Friday',
    'thứ 6': 'Fri',
    'thứ bảy': useShort ? 'Sat' : 'Saturday',
    'thứ 7': 'Sat',
    'chủ nhật': useShort ? 'Sun' : 'Sunday',
    'cn': 'Sun',
    'tháng 1': useShort ? 'Jan' : 'January',
    'tháng 2': useShort ? 'Feb' : 'February',
    'tháng 3': useShort ? 'Mar' : 'March',
    'tháng 4': useShort ? 'Apr' : 'April',
    'tháng 5': useShort ? 'May' : 'May',
    'tháng 6': useShort ? 'Jun' : 'June',
    'tháng 7': useShort ? 'Jul' : 'July',
    'tháng 8': useShort ? 'Aug' : 'August',
    'tháng 9': useShort ? 'Sep' : 'September',
    'tháng 10': useShort ? 'Oct' : 'October',
    'tháng 11': useShort ? 'Nov' : 'November',
    'tháng 12': useShort ? 'Dec' : 'December'
  };

  const translations = i18n.language === "vi" ? translationsEnToVi : translationsViToEn;
  const regex = new RegExp(`\\b(${Object.keys(translations).join('|')})\\b`, 'gi');

  return input.replace(regex, (matched) => translations[matched.toLowerCase()]);
};

export default translateDateWords;
export { formatDateTime};
