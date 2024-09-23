import { useTranslation } from "react-i18next";

import Avatar from "@/components/Avatar/Avatar";
import AppButton from "@/components/Button";
import Container, { EDirection } from "@/components/Container";
import { Iconfy } from "@/components/Iconfy";
import { Information } from "@/components/SingleElements";

const informations = [
  { label: "Rate", data: 4.2, icon: "solar:star-line-duotone" },
  { label: "Follower", data: 1.2 + "K", icon: "solar:user-linear" },
  { label: "Post", data: 29, icon: "tabler:news" },
];

export const TopWriter = () => {
  const { t } = useTranslation("info");
  return (
    <Container
      className={"TopWriter gap-y-[15px] rounded-sm bg-accent-gray p-sm"}
    >
      <img className="h-[150px] w-full object-cover" src="food01.jpg" alt="background" />
      <Container direction={EDirection.ROW}>
        <div className="flex items-center justify-center gap-x-[10px]">
          <Avatar
            containerProps={{ className: "h-[75px] w-[75px]" }}
            name="Louis Hoebregts"
            type={"default"}
          />
          <p className="text-sm font-medium">Louis Hoebregts</p>
        </div>

        <div className="flex flex-1 justify-center gap-md text-center">
          {informations.map((info) => (
            <Information
              key={info.icon}
              icon={info.icon}
              data={info.data}
              label={info.label}
            />
          ))}
        </div>

        <div>
          <AppButton prefixIcon={<Iconfy icon={"ic:baseline-plus"} />}>
            {t("follow")}
          </AppButton>
        </div>
      </Container>
    </Container>
  );
};
