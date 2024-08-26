import { locales } from "@/config";

const useLocale = () => {
  const locale = localStorage.getItem("i18n-Lng");

  return locale ?? locales[0];
};

export default useLocale;
