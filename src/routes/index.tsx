import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";

import {
  ProtectedRouteAdmin,
  ProtectedRouteUser,
} from "@/components/ProtectedRoute";
import About from "@/pages/default/about";
// import { locales } from "@/config";

import Home from "@/pages/default/home";
import { Kiet } from "@/pages/default/Kiet/index";
import Layout from "@/pages/default/Layout";
import { Phuoc } from "@/pages/default/Phuoc/Phuoc";
import DetailsPost from "@/pages/default/posts/details";
import Profile from "@/pages/default/profile";
import Thang from "@/pages/default/Thang";
import Tuan from "@/pages/default/Tuan/Tuan";
import { Writer } from "@/pages/default/writer";
import Minh from "@/pages/Minh";
import NotFound from "@/pages/NotFound";
import EditProfile from "@/pages/default/profile/Edit";
import CategoryPage from "@/pages/default/category";

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
  {
    path: "/",
    element: <Layout />,
    children: [
      createRoute("/", <Home />, ERolePath.USER),
      createRoute("/posts", <Home />, ERolePath.USER),
      createRoute("/posts/:id", <DetailsPost />, ERolePath.USER),
      createRoute("/minh", <Minh />, ERolePath.USER),
      createRoute("/profile/:id", <Profile />, ERolePath.USER),
      createRoute("/profile/:id/edit", <EditProfile />, ERolePath.USER),
      createRoute("/about", <About />, ERolePath.USER),
      createRoute("/contact", <About />, ERolePath.USER),
      createRoute("/writer/:id", <Writer />, ERolePath.USER),
      createRoute("/category/:id", <CategoryPage />, ERolePath.USER),
      {
        path: "/Kiet",
        element: <Kiet />,
      },
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
    ],
  },
];

const paths = {
  "/": ["/"],
  "/posts": ["/posts", "/posts/:id"],
  "/profile": ["/profile/:id", "/profile/:id/edit"],
  "/about": ["/about"],
  "/contact": ["/contact"],
  "/writer": ["/writer/:id"],
  "/category": ["/category", "/category/:id"],
  "/test": ["/test"],
  "/minh": ["/minh"],
} as const;

export type TRoutePaths = (typeof paths)[keyof typeof paths][number] &
  LinkProps["to"];
