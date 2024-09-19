import { Iconfy } from "@/components/Iconfy";

import { filter, icons } from "./items";

const TopCategory: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-between rounded-md bg-accent-gray px-4 py-1 text-tertiary/75">
      <div className="flex items-center gap-4">
        {filter.map((item) => (
          <span
            key={item.key}
            className="cursor-pointer text-xs font-medium hover:text-primary"
          >
            {item.label}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-1">
        {icons.map((item) => (
          <div
            key={item.icon}
            className="cursor-pointer rounded-md p-2 hover:bg-tertiary/5"
          >
            <Iconfy icon={item.icon} sizes={item.size} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;
