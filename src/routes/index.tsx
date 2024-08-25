import { ReactNode } from "react";

import {
  ProtectedRouteAdmin,
  ProtectedRouteUser,
} from "@/components/ProtectedRoute";
// import { locales } from "@/config";

import Home from "@/pages/g_default/home";
import News from "@/pages/g_default/news";
import NotFound from "@/pages/NotFound";

export enum ERolePath {
  ADMIN = 2,
  USER = 1,
  GUEST = 0,
}

// const isCorrectPath = (path: string) => {
//   if (!path.startsWith("/")) return false;
//   return true;
// };

export const createRoute = (
  path: TRoutePaths,
  element: ReactNode,
  roleAccess?: number
) => {
  if (roleAccess) {
    const Wrapper = roleAccess === 1 ? ProtectedRouteUser : ProtectedRouteAdmin;
    element = <Wrapper>{element}</Wrapper>;
  }

  return {
    path,
    element,
  };
};

export const router = [
  createRoute("/", <Home />, ERolePath.USER),
  createRoute("/news", <News />, ERolePath.ADMIN),
  createRoute("/news/:id", <News />, ERolePath.ADMIN),
  {
    path: "*",
    element: <NotFound />,
  },
];
const paths = {
  "/": ["/"],
  news: ["/news", "/news/:id"],
} as const;

export type TRoutePaths = (typeof paths)[keyof typeof paths][number];
