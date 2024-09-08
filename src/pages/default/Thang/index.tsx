import React from "react";
import { Tabs } from "antd";

import ListPostCard from "./ListPostCard";
import SingleElement from "./SingleElement";

const Thang: React.FC = () => {
  const items = [
    {
      label: "Post Card",
      key: "1",
      children: <ListPostCard />,
    },
    {
      label: "Single Element",
      key: "2",
      children: <SingleElement />,
    },
  ];

  return <Tabs type="card" items={items} />;
};

export default Thang;
