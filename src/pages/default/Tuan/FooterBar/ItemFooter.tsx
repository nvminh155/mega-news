import { Iconfy } from "@/components/Iconfy";

interface ItemFooterProps {
  icon: string;
  label?: string;
  isActive?: boolean;
}

const ItemFooter = ({ icon, label, isActive = false }: ItemFooterProps) => {
  const activeClasses = isActive
    ? "bg-gray text-tertiary-black" //  Active
    : "text-tertiary-black";

  return (
    <div
      className={`group flex items-center space-x-1 rounded-2xl px-6 py-2 ${activeClasses} hover:bg-primary hover:text-white`}
    >
      <Iconfy icon={icon} size="lg" />
      {label && (
        <h1
          className={`transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          {label}
        </h1>
      )}
    </div>
  );
};

export default ItemFooter;
