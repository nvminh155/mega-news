import { useState } from "react";
import { Control } from "react-hook-form";

import { Iconfy } from "@/components/Iconfy";

import Dropdown from "./DropDown";
import FormInput from "./FormInput";

type TFormSearchProps = {
  placeholder?: string;
  control: Control<any>;
  items?: string[];
};

const DotsDropdown = ({ items }: Pick<TFormSearchProps, "items">) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="relative flex flex-col">
      <div
        className="ml-4 flex cursor-pointer items-center"
        onClick={toggleDropdown}
      >
        <Iconfy
          icon={
            isDropdownOpen
              ? "iconamoon:close-bold"
              : "ph:dots-three-outline-vertical-fill"
          }
          className="text-tertiary-75 text-lg transition-transform duration-300"
        />
      </div>
      {isDropdownOpen && <Dropdown items={items} />}
    </div>
  );
};

const FormSearch = ({ placeholder, control, items }: TFormSearchProps) => {
  return (
    <FormInput
      control={control}
      name="search"
      prefix={<DotsDropdown items={items} />}
      suffix={
        <button
          type="submit"
          className="flex items-center rounded-lg px-2 text-tertiary"
        >
          <Iconfy className="text-lg" icon="fa:search" />
        </button>
      }
      placeholder={placeholder ?? ""}
      className="border-none"
    />
  );
};

export default FormSearch;
