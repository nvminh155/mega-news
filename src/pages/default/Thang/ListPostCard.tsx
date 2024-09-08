import PostCard from "@/components/postCard";
import { EPostCardSize, EPostCardType } from "@/components/postCard/type";

const ListPostCard = () => {
  return (
    <>
      <div>
        <div>Widget</div>
        <div>
          <div>
            <PostCard
              imageUrl="/background.jfif"
              title="Kayaking Adventure Kayaking Adventure Kayaking Adventure Kayaking Adventure Kayaking Adventure "
              description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor"
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
              size={EPostCardSize.medium}
              imageUrl="/background.jfif"
              title="Kayaking Adventure"
              description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor"
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
              imageUrl="/background.jfif"
              title="Kayaking Adventure"
              description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor"
              author={{
                name: "Jane Doe",
                title: "Adventure Enthusiast",
              }}
            />
          </div>
          <div>
            <PostCard
              imageUrl="/background.jfif"
              title="Kayaking Adventure"
              description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor"
            />
          </div>
          <div>
            <PostCard
              imageUrl="/background.jfif"
              title="Kayaking Adventure"
              author={{
                name: "Jane Doe",
                title: "Adventure Enthusiast",
                avatarUrl: "/avatar.svg",
              }}
            />
          </div>
          <div>
            <PostCard imageUrl="/background.jfif" title="Kayaking Adventure" />
          </div>
        </div>
      </div>
      <div>
        <div>Vertical - Size: "md"</div>
        <div className="flex gap-5">
          <div>
            <PostCard
              size={EPostCardSize.medium}
              imageUrl="/background.jfif"
              title="Kayaking Adventure"
              description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor"
              author={{
                name: "Jane Doe",
                title: "Adventure Enthusiast",
                avatarUrl: "/avatar.svg",
              }}
            />
          </div>
          <div>
            <PostCard
              size={EPostCardSize.medium}
              imageUrl="/background.jfif"
              title="Kayaking Adventure"
              description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor"
            />
          </div>
          <div>
            <PostCard
              size={EPostCardSize.medium}
              imageUrl="/background.jfif"
              title="Kayaking Adventure"
              author={{
                name: "Jane Doe",
                title: "Adventure Enthusiast",
                avatarUrl: "/avatar.svg",
              }}
            />
          </div>
          <div>
            <PostCard
              size={EPostCardSize.medium}
              imageUrl="/background.jfif"
              title="Kayaking Adventure"
            />
          </div>
        </div>
      </div>
      <div>
        <div>Horizontal - Size: "lg"</div>
        <div className="flex gap-5">
          <div>
            <PostCard
              imageUrl="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-3d-thien-nhien-003.jpg"
              title="Kayaking Adventure"
              description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor"
              author={{
                name: "Jane Doe",
                title: "Adventure Enthusiast",
                avatarUrl: "/avatar.svg",
              }}
              type={EPostCardType.horizontal}
            />
          </div>
          <div>
            <PostCard
              imageUrl="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-3d-thien-nhien-003.jpg"
              title="Kayaking Adventure"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit ..."
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
              imageUrl="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-3d-thien-nhien-003.jpg"
              title="Kayaking Adventure Kayaking Adventure Kayaking Adventure Kayaking Adventure"
              description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor"
              author={{
                name: "Jane Doe",
                title: "Adventure Enthusiast",
                avatarUrl: "/avatar.svg",
              }}
              type={EPostCardType.horizontal}
            />
          </div>
          <div>
            <PostCard
              size={EPostCardSize.medium}
              imageUrl="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-3d-thien-nhien-003.jpg"
              title="Kayaking Adventure"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet "
              type={EPostCardType.horizontal}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPostCard;
