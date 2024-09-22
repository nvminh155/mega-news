import { useEffect, useState } from "react";
import { TUser } from "@/types";

import { Writer } from "../writer";

export const Phuoc = () => {
  const [user, setUser] = useState<TUser>();
  const fetchUser = async () => {
    setUser({
      id: "user1",
      avatarUrl:
        "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-3d-thien-nhien-003.jpg",
      bannerUrl:
        "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-3d-thien-nhien-003.jpg",
      firstName: "John",
      lastName: "Doe",
      userName: "johndoe",
      password: "123456",
      email: "abc1@gmail.com",
      title: "Hello World",
      followerIds: ["user2"],
      explanationHTML: "This is my explanation",
    });
  };
  useEffect(() => {
    fetchUser();
  }, []);
  if (user == undefined) return <div> Loading...</div>;
  else return <Writer User={user} />;
};
