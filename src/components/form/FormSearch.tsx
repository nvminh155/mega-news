import { useState } from "react";
import { Icon } from "@iconify-icon/react";

type ThreeDots = {
  isThreeDots?: boolean;
};

const FormSearch = ({ isThreeDots = false }: ThreeDots) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <form className="flex h-[48px] w-full items-center space-x-[18px] rounded-lg border-[#E6E6E6] bg-input">
        {isThreeDots && (
          <div className="relative flex flex-col">
            <div
              className="ml-4 flex cursor-pointer items-center"
              onClick={toggleDropdown}
            >
              {isDropdownOpen ? (
                <Icon
                  icon="iconamoon:close-bold"
                  className="text-[20px] text-tertiary-75 transition-transform duration-300"
                />
              ) : (
                <Icon
                  icon="ph:dots-three-outline-vertical-fill"
                  className="text-[20px] text-tertiary-75 transition-transform duration-300"
                />
              )}
            </div>
            {isDropdownOpen && (
              <div className="absolute top-full mt-6 w-[170px] cursor-pointer rounded-md bg-white shadow-lg">
                <ul className="flex h-[160px] flex-col justify-center space-y-1 p-2 text-xs text-tertiary-75">
                  <li className="rounded px-2 py-1 hover:bg-input">
                    Category one
                  </li>
                  <li className="rounded px-2 py-1 hover:bg-input">
                    Category two
                  </li>
                  <li className="rounded px-2 py-1 hover:bg-input">
                    Category Three
                  </li>
                  <li className="rounded px-2 py-1 hover:bg-input">
                    Category four
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
        <input
          type="search"
          id="searchField"
          placeholder="Search Anything"
          className="w-full rounded-lg bg-input p-2 placeholder:text-xs placeholder:text-tertiary-75"
        />
        <button
          type="submit"
          className="flex items-center rounded-lg p-2 text-gray-600"
        >
          <Icon className="text-[20px]" icon="fa:search" />
        </button>
      </form>
    </div>
  );
};

export default FormSearch;
