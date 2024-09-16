import { ReactNode } from "react";

import {
  ProtectedRouteAdmin,
  ProtectedRouteUser,
} from "@/components/ProtectedRoute";
// import { locales } from "@/config";

import Home from "@/pages/default/home";
import { Phuoc } from "@/pages/default/Phuoc/Phuoc";
import Thang from "@/pages/default/Thang";
import Tuan from "@/pages/default/Tuan/Tuan";
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
  {
    path: "/Phuoc",
    element: <Phuoc />,
  },
  {
    path: "/thang",
    element: <Thang />,
  },
  {
    path: "/Tuan",
    element: <Tuan />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const paths = {
  "/": ["/"],
  "/minh": ["/minh"],
} as const;

export type TRoutePaths = (typeof paths)[keyof typeof paths][number];
