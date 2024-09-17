import React from "react";
import { Tabs } from "antd";

import TopCategory from "@/components/Category/TopCategory";
import Sidebar from "@/components/Sidebar";

import ListComment from "./ListComment";
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
    {
      label: "Sidebar",
      key: "3",
      children: (
        <Sidebar
          creator={{
            avatar: "/background.jfif",
            name: "Behzad Pashaei",
            posts: [
              {
                post: {
                  id: "post1",
                  imageUrl: "/avatar.svg",
                  title: "abc",
                  createdAt: 1726239005000,
                },
              },
            ],
          }}
          tags={[
            {
              id: "1",
              name: "Montenegro",
            },
            {
              id: "2",
              name: "Visit Croatia",
            },
            {
              id: "3",
              name: "Luxury Travel",
            },
            {
              id: "4",
              name: "Travel Log",
            },
            {
              id: "5",
              name: "Paradise Island",
            },
            {
              id: "6",
              name: "Travel Info",
            },
          ]}
        />
      ),
    },
    {
      label: "Comment",
      key: "4",
      children: <ListComment />,
    },
    {
      label: "Top Category",
      key: "5",
      children: <TopCategory />,
    },
  ];

  return <Tabs type="card" items={items} />;
};

export default Thang;
