// mockPosts.ts
import { TPost } from "@/types";

export const mockPosts: TPost[] = [
  {
    id: "post1",
    imageUrl:
      "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-3d-thien-nhien-003.jpg",
    videoUrl: "",
    imageGallery: [],
    title: "Hello World",
    explanationHTML: "This is my first post!",
    authorId: "user1",
    tags: ["tag1", "tag2"],
    categoryIds: ["category1"],
    bookmarkList: ["user2"],
    draft: false,
    isPublished: true,
    createdAt: 1726239004999,
  },
  {
    id: "post2",
    imageUrl:
      "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-3d-thien-nhien-003.jpg",
    videoUrl: "",
    imageGallery: [],
    title: "Hello Again",
    explanationHTML: "This is my second post!",
    authorId: "user2",
    tags: ["tag3", "tag4"],
    categoryIds: ["category2"],
    bookmarkList: ["user1"],
    draft: false,
    isPublished: true,
    createdAt: 1726239005000,
  },
];
