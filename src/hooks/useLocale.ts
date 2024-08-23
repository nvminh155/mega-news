import { useParams } from "react-router-dom";

const useLocale = () => {
  const params = useParams();
  const locale = params.locale;

  return locale;
};

export default useLocale;
