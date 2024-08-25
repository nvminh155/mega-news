const useLocale = () => {
  const locale = localStorage.getItem("i18n-lng");

  return locale ?? "en";
};

export default useLocale;
