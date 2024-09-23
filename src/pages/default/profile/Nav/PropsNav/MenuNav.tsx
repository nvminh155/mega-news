import { useState } from "react";

interface MenuItem {
  label: string;
}
interface MenuNavProps {
  menuItems: MenuItem[];
}

const MenuNav: React.FC<MenuNavProps> = ({ menuItems }) => {
  const [activeItem, setActiveItem] = useState(menuItems[0]?.label);
  return (
    <div className="flex items-center space-x-9 text-md font-medium">
      {menuItems.map((item) => (
        <div
          key={item.label}
          className="relative cursor-pointer text-tertiary-black"
          onClick={() => setActiveItem(item.label)}
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
