import useMediaQuery from "./useMediaQuery";

const useDeviceType = () => {
  const isMobile = useMediaQuery("(max-width: 1023px)");
  const isTablet = useMediaQuery("(min-width: 1024px) and (max-width: 1199px)");
  const isDesktop = useMediaQuery("(min-width: 1200px)");

  return { isMobile, isTablet, isDesktop };
};

export default useDeviceType;
