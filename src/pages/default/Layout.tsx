import { Outlet } from "react-router-dom";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Layout = () => {
  return (
    <Container className="mx-auto min-h-screen px-5 pt-2 desktop:max-w-[1512px]">
      <Header />
      <div className="flex-1 pb-[155px] pt-[45px]">
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};

export default Layout;
