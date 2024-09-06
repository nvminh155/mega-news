import AppButton from "@/components/button";
import { Iconfy } from "@/components/Iconfy";

type TAction = {
  key: string;
  label: string;
  icon: string;
};

const Actions: React.FC = () => {
  const items: TAction[] = [
    {
      key: "share",
      label: "Share",
      icon: "system-uicons:paper-plane",
    },
    {
      key: "marking",
      label: "Marking",
      icon: "bi:bookmark",
    },
    {
      key: "comment",
      label: "Comment",
      icon: "fa-regular:comment-dots",
    },
  ];
  return (
    <div className="flex h-10 w-full gap-2">
      {items.map((item) => (
        <AppButton
          className="w-1/3 gap-2 bg-gray font-medium"
          variant={"disabled"}
          key={item.key}
          prefixIcon={<Iconfy icon={item.icon} size={"sm"} />}
        >
          <div>{item.label}</div>
        </AppButton>
      ))}
    </div>
  );
};

export default Actions;
