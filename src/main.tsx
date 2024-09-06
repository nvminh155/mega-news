import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@/styles/globals.css";
import "@/i18n";

import { store } from "@/stores";
import { Provider as ReduxProvider } from "react-redux";

import Container from "./components/Container";
import Footer from "./components/footer";
import Header from "./components/header";
import { ConfigAntd } from "./config/antd";
import { router } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ConfigAntd>
        <Container className="min-h-screen w-screen max-w-[1920px] px-5">
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
