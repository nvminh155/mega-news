import { Iconfy } from "@/components/Iconfy";
import { useNavigate } from "react-router-dom";

interface ItemFooterProps {
  icon: string;
  label?: string;
  isActive?: boolean;
  onClickCallBack?: (icon: string) => void;
}

const ItemFooter = ({ icon, label, isActive = false, onClickCallBack }: ItemFooterProps) => {
  const navigate = useNavigate();
  const activeClasses = isActive
    ? "bg-primary text-white font-medium" //  Active
    : "text-tertiary-black";

  return (
    <div
      className={`group flex items-center space-x-1 rounded-2xl px-6 py-2 cursor-pointer ${activeClasses} hover:bg-primary hover:text-white`}
      onClick={() => {
        if(icon === "lsicon:user-filled") navigate("/profile/12")
        if(icon === "typcn:home") navigate("/")
        if(onClickCallBack) onClickCallBack(icon);
      }}
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
