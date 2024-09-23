import {
  Actions,
  BreadCrumb,
  Creator,
  Tags,
} from "@/components/SingleElements";

const SingleElement: React.FC = () => {
  return (
    <div>
      <div className="w-[361px]">
        --------Actions--------
        <Actions />
      </div>
      <div className="w-[456px]">
        --------BreadCrumb--------
        <BreadCrumb
          items={[
            { key: 1, title: "Home", path: "/" },
            { key: 2, title: "Featured", path: "/minh" },
            {
              key: 3,
              title:
                "How to Spend the Perfect Day on Croatia's Most Magical Island",
            },
          ]}
        />
      </div>
      <div className="w-[360px]">
        --------Creator--------
        <Creator
          avatar="/background.jfif"
          name="Behzad Pashaei"
          posts={[
            {
              post: {
                id: "post1",
                imageUrl: "/avatar.svg",
                title: "abc",
                createdAt: 1726239005000,
              },
            },
          ]}
        />
      </div>
      <div className="w-[360px]">
        --------Tags--------
        <Tags
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
    </div>
  );
};

export default SingleElement;
