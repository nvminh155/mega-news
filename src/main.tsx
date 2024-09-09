import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@/styles/globals.css";
import "@/i18n";

import { store } from "@/stores";
import { Provider as ReduxProvider } from "react-redux";

import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ConfigAntd } from "./config/antd";
import { router } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ConfigAntd>
        <Container className="mx-auto min-h-screen px-5 pt-2 max-tablet:bg-red-200 max-mobile:bg-red-50 desktop:max-w-[1512px]">
          <Header />
          <Container className="flex-1">
            <RouterProvider router={createBrowserRouter(router)} />
          </Container>
          <Footer />
        </Container>
      </ConfigAntd>
    </ReduxProvider>
  </StrictMode>
);
