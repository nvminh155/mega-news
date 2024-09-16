import Avatar from "@/components/Avatar/Avatar";
import AppButton from "@/components/Button";
import Container, { EDirection } from "@/components/Container";
import { Iconfy } from "@/components/Iconfy";

export const TopWriter = () => {
  return (
    <Container
      className={"TopWriter gap-y-[15px] rounded-sm bg-accent-gray p-sm"}
    >
      <img className="h-[150px] w-full object-cover" src="food01.jpg" />
      <Container direction={EDirection.ROW}>
        <div className="flex items-center justify-center gap-x-[10px]">
          <Avatar
            containerProps={{ className: "h-[75px] w-[75px]" }}
            name="Louis Hoebregts"
            type={"default"}
          />
          <p className="text-sm font-medium">Louis Hoebregts</p>
        </div>
        <div className="flex flex-1 justify-center space-x-5 text-center">
          <div className="flex">
            <Iconfy
              icon={"material-symbols:star-outline"}
              className="h-[20px] w-[20px]"
            />
            Rate : 4.2
          </div>
          <div className="flex">
            <Iconfy
              icon={"iconamoon:profile-bold"}
              className="h-[20px] w-[20px]"
            />
            Follower : 1.2 k
          </div>
          <div className="flex">
            <Iconfy icon={"mdi:post-outline"} className="h-[20px] w-[20px]" />
            Post : 29
          </div>
        </div>
        <div>
          <AppButton prefixIcon={<Iconfy icon={"ic:baseline-plus"} />}>
            Follow
          </AppButton>
        </div>
      </Container>
    </Container>
  );
};
