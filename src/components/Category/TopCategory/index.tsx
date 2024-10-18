import { cn } from "@/lib/cn";
import AppLink from "@/components/AppLink";
import { Iconfy } from "@/components/Iconfy";

import { filter, icons } from "./items";

// type TTopCategoryProps = {
// };

const TopCategory: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-between rounded-md bg-accent-gray px-4 py-1 text-tertiary/75">
      <div className="flex items-center gap-4">
        {filter.map((item) => (
          <AppLink
            to={`/category/${item.label}` as any}
            key={item.key}
            className={cn(
              "cursor-pointer text-xs font-medium hover:text-primary",
              {
                "text-primary": window.location.pathname.includes(item.label),
              }
            )}
          >
            {item.label}
          </AppLink>
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
