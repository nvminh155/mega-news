import { useState } from "react";

interface MenuItem {
  label: string;
}
interface MenuNavProps {
  menuItems: MenuItem[];
  onChangeCallback?: (tab: number) => void;
}

const MenuNav: React.FC<MenuNavProps> = ({ menuItems, onChangeCallback }) => {
  const [activeItem, setActiveItem] = useState(menuItems[0]?.label);
  return (
    <div className="flex flex-1 items-center justify-center max-semi-tablet:gap-sm gap-md text-md font-medium">
      {menuItems.map((item, i) => (
        <div
          key={item.label}
          className="relative cursor-pointer text-tertiary"
          onClick={() => {
            setActiveItem(item.label);
            if (onChangeCallback) onChangeCallback(i);
          }}
        >
          {item.label}
          {activeItem === item.label && (
            <span className="absolute -bottom-1 left-0 h-[4px] w-full rounded-xl bg-primary"></span>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuNav;
