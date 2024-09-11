

import PostCard from "@/components/PostCard";
import { EPostCardSize, EPostCardType } from "@/components/PostCard/type";

const ListPostCard = () => {
  return (
    <>
      <div>
        <div>Widget</div>
        <div>
          <div>
            <PostCard
              post={{
                id: "post1",
                imageUrl: "/background.jfif",
                title:
                  "Kayaking Adventure Kayaking Adventure Kayaking Adventure Kayaking Adventure Kayaking Adventure ",
                explanationHTML:
                  "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor",
              }}
              type={EPostCardType.widget}
            />
          </div>
        </div>
      </div>
      <div>
        <div>Action</div>
        <div>
          <div>
            <PostCard
              post={{
                id: "post1",
                imageUrl: "/background.jfif",
                title: "Kayaking Adventure",
                explanationHTML:
                  "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor",
              }}
              size={EPostCardSize.medium}
              actions={{
                viewers: ["1", "2", "3"],
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <div>Vertical - Size: "lg"</div>
        <div className="flex gap-5">
          <div>
            <PostCard
              post={{
                id: "post1",
                imageUrl: "/background.jfif",
                title: "Kayaking Adventure",
                explanationHTML:
                  "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor",
                authorId: "user1",
              }}
            />
          </div>
          <div>
            <PostCard
              post={{
                id: "post1",
                imageUrl: "/background.jfif",
                title: "Kayaking Adventure",
                explanationHTML:
                  "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor",
              }}
            />
          </div>
          <div>
            <PostCard
              post={{
                id: "post1",
                imageUrl: "/background.jfif",
                title: "Kayaking Adventure",
                authorId: "user1",
              }}
            />
          </div>
          <div>
            <PostCard
              post={{
                id: "post1",
                imageUrl: "/background.jfif",
                title: "Kayaking Adventure",
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <div>Vertical - Size: "md"</div>
        <div className="flex gap-5">
          <div>
            <PostCard
              size={EPostCardSize.medium}
              post={{
                id: "post1",
                imageUrl: "/background.jfif",
                title: "Kayaking Adventure",
                explanationHTML:
                  "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor",
                authorId: "user1",
              }}
            />
          </div>
          <div>
            <PostCard
              size={EPostCardSize.medium}
              post={{
                id: "post1",
                imageUrl: "/background.jfif",
                title: "Kayaking Adventure",
                explanationHTML:
                  "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor",
              }}
            />
          </div>
          <div>
            <PostCard
              size={EPostCardSize.medium}
              post={{
                id: "post1",
                imageUrl: "/background.jfif",
                title: "Kayaking Adventure",
                authorId: "user1",
              }}
            />
          </div>
          <div>
            <PostCard
              size={EPostCardSize.medium}
              post={{
                id: "post1",
                imageUrl: "/background.jfif",
                title: "Kayaking Adventure",
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <div>Horizontal - Size: "lg"</div>
        <div className="flex gap-5">
          <div>
            <PostCard
              post={{
                id: "post1",
                imageUrl:
                  "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-3d-thien-nhien-003.jpg",
                title: "Kayaking Adventure",
                explanationHTML:
                  "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor",
                authorId: "user1",
              }}
              type={EPostCardType.horizontal}
            />
          </div>
          <div>
            <PostCard
              post={{
                id: "post1",
                imageUrl:
                  "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-3d-thien-nhien-003.jpg",
                title: "Kayaking Adventure",
                explanationHTML:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit ...",
              }}
              type={EPostCardType.horizontal}
            />
          </div>
        </div>
      </div>
      <div>
        <div>Horizontal - Size: "md"</div>
        <div className="flex gap-5">
          <div>
            <PostCard
              size={EPostCardSize.medium}
              post={{
                id: "post1",
                imageUrl:
                  "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-3d-thien-nhien-003.jpg",
                title: "Kayaking Adventure",
                explanationHTML:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet ",
              }}
              type={EPostCardType.horizontal}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPostCard;
