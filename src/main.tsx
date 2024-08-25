import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@/styles/globals.css";
import "@/i18n";

import { store } from "@/stores";
import { Provider as ReduxProvider } from "react-redux";

import { router } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <div className="w-[1400px]">
        <RouterProvider router={createBrowserRouter(router)} />
      </div>
    </ReduxProvider>
  </StrictMode>
);
