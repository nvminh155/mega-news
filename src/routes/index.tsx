import { ReactNode } from "react";

import AvatarOne from "@/components/avartar/AvatarOne";
import AvatarTwo from "@/components/avartar/AvatarTwo";
import {
  ProtectedRouteAdmin,
  ProtectedRouteUser,
} from "@/components/ProtectedRoute";
// import { locales } from "@/config";

import Home from "@/pages/default/home";
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
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/Tuan-avatarOne",
    element: <AvatarOne />,
  },
  {
    path: "/Tuan-avatarTwo",
    element: <AvatarTwo />,
  },
];
const paths = {
  "/": ["/"],
} as const;

export type TRoutePaths = (typeof paths)[keyof typeof paths][number];
