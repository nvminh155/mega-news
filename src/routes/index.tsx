import { ReactNode } from "react";

import {
  ProtectedRouteAdmin,
  ProtectedRouteUser,
} from "@/components/ProtectedRoute";
// import { locales } from "@/config";

import Home from "@/pages/default/home";
import Minh from "@/pages/default/Minh";
import Thang from "@/pages/default/Thang";
import { Phuoc } from "@/pages/default/Phuoc";
import NotFound from "@/pages/NotFound";
import { Kiet } from "@/pages/Kiet";
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
    path: "/thang",
    element: <Thang />,
  },
  {
    path: "/Kiet",
    element: <Kiet/>,
  },
  {
    path: "/minh",
    element: <Minh />,
  },
  {
    path: "/Phuoc",
    element: <Phuoc />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const paths = {
  "/": ["/"],
} as const;

export type TRoutePaths = (typeof paths)[keyof typeof paths][number];
