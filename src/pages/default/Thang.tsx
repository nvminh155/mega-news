import React from "react";

import PostCard from "@/components/postCard";

const Thang: React.FC = () => {
  return (
    <>
      <div>
        <div>Widget</div>
        <div>
          <div>
            <PostCard
              size="md"
              imageUrl="/background.jfif"
              title="Kayaking Adventure Kayaking Adventure Kayaking Adventure Kayaking Adventure Kayaking Adventure "
              description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor"
              type="widget"
            />
          </div>
        </div>
      </div>
      <div>
        <div>Action</div>
        <div>
          <div>
            <PostCard
              size="md"
              imageUrl="/background.jfif"
              title="Kayaking Adventure"
              description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor"
              showAction={true}
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
              authorName="Jane Doe"
              authorTitle="Adventure Enthusiast"
              authorAvatarUrl="/avatar.svg"
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
              authorName="Jane Doe"
              authorTitle="Adventure Enthusiast"
              authorAvatarUrl="/avatar.svg"
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
              size="md"
              imageUrl="/background.jfif"
              title="Kayaking Adventure"
              description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor"
              authorName="Jane Doe"
              authorTitle="Adventure Enthusiast"
              authorAvatarUrl="/avatar.svg"
            />
          </div>
          <div>
            <PostCard
              size="md"
              imageUrl="/background.jfif"
              title="Kayaking Adventure"
              description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor"
            />
          </div>
          <div>
            <PostCard
              size="md"
              imageUrl="/background.jfif"
              title="Kayaking Adventure"
              authorName="Jane Doe"
              authorTitle="Adventure Enthusiast"
              authorAvatarUrl="/avatar.svg"
            />
          </div>
          <div>
            <PostCard
              size="md"
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
              authorName="Jane Doe"
              authorTitle="Adventure Enthusiast"
              authorAvatarUrl="/avatar.svg"
              type="horizontal"
            />
          </div>
          <div>
            <PostCard
              imageUrl="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-3d-thien-nhien-003.jpg"
              title="Kayaking Adventure"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit ..."
              type="horizontal"
            />
          </div>
        </div>
      </div>
      <div>
        <div>Horizontal - Size: "md"</div>
        <div className="flex gap-5">
          <div>
            <PostCard
              size="md"
              imageUrl="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-3d-thien-nhien-003.jpg"
              title="Kayaking Adventure Kayaking Adventure Kayaking Adventure Kayaking Adventure"
              description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor"
              authorName="Jane Doe"
              authorTitle="Subhead"
              authorAvatarUrl="/avatar.svg"
              type="horizontal"
            />
          </div>
          <div>
            <PostCard
              size="md"
              imageUrl="https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/hinh-nen-3d-thien-nhien-003.jpg"
              title="Kayaking Adventure"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet "
              type="horizontal"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Thang;
