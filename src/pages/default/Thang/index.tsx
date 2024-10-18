import React from "react";
import { Tabs } from "antd";

import TopCategory from "@/components/Category/TopCategory";
import ListWeatherWidget from "@/components/ListWeatherWidget";
import Sidebar from "@/components/Sidebar";

import ViewPostChart from "../profile/ViewPostChart";
import { categories, years } from "../profile/ViewPostChart/data";
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
    {
      label: "View Post Chart",
      key: "6",
      children: <ViewPostChart categories={categories} years={years} />,
    },
    {
      label: "Weather Widget",
      key: "7",
      children: <ListWeatherWidget />,
    },
  ];

  return <Tabs type="card" items={items} defaultActiveKey="7" />;
};

export default Thang;
