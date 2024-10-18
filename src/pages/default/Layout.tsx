import i18n from "@/i18n";
import { Outlet } from "react-router-dom";

import AppButton from "@/components/Button";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout = () => {
  return (
    <Container className="mx-auto min-h-screen px-5 pt-2 desktop:max-w-[1512px]">
      <Header />
      <AppButton
        onClick={() => {
          i18n.changeLanguage(i18n.language === "en" ? "vi" : "en");
          // i18n.changeLanguage(i18n.language === "en" ? "vi" : "en");
        }}
        className="fixed left-1/2 top-1/2 z-10"
      >
        Change lang
      </AppButton>
      <div className="flex-1 pb-[155px] pt-[45px]">
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};

export default Layout;
