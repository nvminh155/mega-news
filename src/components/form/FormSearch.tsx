import { useState } from "react";
import { Control } from "react-hook-form";

import { Iconfy } from "@/components/Iconfy";

import Dropdown from "./DropDown";
import FormInput from "./FormInput";

type FormSearchProps = {
  dots?: boolean;
  placeholder?: string;
  control: Control<any>;
  items?: string[];
};

const FormSearch = ({ dots, placeholder, control, items }: FormSearchProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="h-full w-full">
      <div className="flex h-full w-full items-center justify-evenly rounded-xl bg-gray">
        {dots && (
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
        )}
        <div className="h-full w-full">
          <FormInput
            control={control}
            name="search"
            placeholder={placeholder ?? ""}
            className={"border-none"}
          />
        </div>
        <button
          type="submit"
          className="flex items-center rounded-lg p-2 text-gray-600"
        >
          <Iconfy className="text-lg" icon="fa:search" />
        </button>
      </div>
    </div>
  );
};

export default FormSearch;
