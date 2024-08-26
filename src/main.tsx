import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@/styles/globals.css";
import "@/i18n";

import { store } from "@/stores";
import { Provider as ReduxProvider } from "react-redux";

import Footer from "./components/footer";
import Header from "./components/header";
import { ConfigAntd } from "./config/antd";
import { router } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ConfigAntd>
        <div className="flex min-h-screen w-screen flex-col px-5">
          <Header />
          <div className="flex-1">
            <RouterProvider router={createBrowserRouter(router)} />
          </div>
          <Footer />
        </div>
      </ConfigAntd>
    </ReduxProvider>
  </StrictMode>
);
