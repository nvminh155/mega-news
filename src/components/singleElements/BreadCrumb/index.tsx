import React from "react";
import { TRoutePaths } from "@/routes";
import { Breadcrumb } from "antd";

import AppLink from "@/components/AppLink";
import { Iconfy } from "@/components/Iconfy";

type TBreadCrumb = {
  key: number;
  title: React.ReactNode;
  path?: TRoutePaths;
};

const BreadCrumb: React.FC<{ items: TBreadCrumb[] }> = ({ items }) => {
  return (
      <Breadcrumb
        separator={<Iconfy icon={"mingcute:right-line"} size={"lg"} />}
      >
        {items.map((item) => (
          <Breadcrumb.Item key={item.key}>
            {item.path ? (
              <AppLink
                to={item.path}
                className="inline-block max-w-[150px] truncate"
              >
                {item.title}
              </AppLink>
            ) : (
              <span className="inline-block max-w-[150px] truncate">
                {item.title}
              </span>
            )}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
  );
};

export default BreadCrumb;
