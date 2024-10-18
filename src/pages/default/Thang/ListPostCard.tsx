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
                createdAt: 1726239005000,
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
                createdAt: 1726239005000,
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
                createdAt: 1726239005000,
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
                createdAt: 1726239005000,
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
                createdAt: 1726239005000,
              }}
            />
          </div>
          <div>
            <PostCard
              post={{
                id: "post1",
                imageUrl: "/background.jfif",
                title: "Kayaking Adventure",
                createdAt: 1726239005000,
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
                createdAt: 1726239005000,
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
                createdAt: 1726239005000,
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
                createdAt: 1726239005000,
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
                createdAt: 1726239005000,
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
                createdAt: 1726239005000,
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
                createdAt: 1726239005000,
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
                createdAt: 1726239005000,
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
