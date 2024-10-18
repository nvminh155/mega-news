import useMediaQuery from "./useMediaQuery";

const useDeviceType = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1100px)");
  const isSemiTablet = useMediaQuery(
    "(min-width: 560px) and (max-width: 768px)"
  );
  const isDesktop = useMediaQuery("(min-width: 1100)");

  return { isMobile, isTablet, isDesktop, isSemiTablet };
};

export default useDeviceType;
