import {
  Actions,
  BreadCrumb,
  Creator,
  Informations,
  Tags,
} from "@/components/SingleElements";

const SingleElement: React.FC = () => {
  return (
    <div>
      <div className="w-[361px]">
        --------Actions--------
        <Actions />
      </div>
      <div className="w-[509px]">
        --------Informations--------
        <Informations date={1656947004000} comments={35} category="Sport" />
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
            { post: { id: "post1", imageUrl: "/avatar.svg", title: "abc" } },
          ]}
        />
      </div>
      <div className="w-[360px]">
        --------Tags--------
        <Tags
          tags={[
            {
              key: "1",
              name: "Montenegro",
            },
            {
              key: "2",
              name: "Visit Croatia",
            },
            {
              key: "3",
              name: "Luxury Travel",
            },
            {
              key: "4",
              name: "Travel Log",
            },
            {
              key: "5",
              name: "Paradise Island",
            },
            {
              key: "6",
              name: "Travel Info",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SingleElement;
