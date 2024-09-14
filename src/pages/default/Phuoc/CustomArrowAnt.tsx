import { ButtonProps } from "antd";

import { Iconfy } from "@/components/Iconfy";

export const PrevArrow = (props: ButtonProps) => {
  const { className, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <Iconfy icon="ooui:previous-ltr" className="icon font-bold text-black" />
    </div>
  );
};

export function NextArrow(props: ButtonProps) {
  const { className, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <Iconfy icon="ooui:next-ltr" className="icon font-bold text-black" />
    </div>
  );
}
