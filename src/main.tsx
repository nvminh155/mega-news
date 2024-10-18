import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@/styles/globals.css";
import "@/i18n";

import { store } from "@/stores";
import { Provider as ReduxProvider } from "react-redux";

import { ConfigAntd } from "./config/antd";
import AuthProvider from "./contexts/AuthProvider";
import { router } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ConfigAntd>
        <AuthProvider>
          <RouterProvider router={createBrowserRouter(router)} />
        </AuthProvider>
      </ConfigAntd>
    </ReduxProvider>
  </StrictMode>
);
