import LeftSingle from "./LeftSingle";
import Sidebar from "./Sidebar";

const DetailsPost = () => {
  return (
    <div className="flex w-full gap-md">
      <LeftSingle />
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
      
    </div>
  );
};

export default DetailsPost;
