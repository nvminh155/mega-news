import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { cn } from '@/lib/cn';

interface PaginationProps {
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages }) => {

  const initialPage = 1; //trang  ban dau
  const buttonsToShow = 4; // so nut măc dinh

  // State for enabling/disabling pagination
  const isEnabled = true;

  // State for active page
  const [activePage, setActivePage] = useState(initialPage);

  // Calculate buttons to display based on total pages and visible buttons
  const numberOfPages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const getButtonsToDisplay = () => {
    if (!isEnabled || numberOfPages.length <= buttonsToShow) {
      return numberOfPages;
    }

    const dots = '...';
    let tempNumberOfPages = [];

    if (activePage <= Math.ceil(buttonsToShow / 2)) {
      tempNumberOfPages = [
        ...numberOfPages.slice(0, buttonsToShow - 1),
        dots,
        numberOfPages[numberOfPages.length - 1]
      ];
    } else if (activePage >= numberOfPages.length - Math.floor(buttonsToShow / 2)) {
      tempNumberOfPages = [
        1,
        dots,
        ...numberOfPages.slice(numberOfPages.length - buttonsToShow + 1)
      ];
    } else {
      tempNumberOfPages = [
        1,
        dots,
        activePage,
        dots,
        numberOfPages[numberOfPages.length - 1]
      ];
    }

    return tempNumberOfPages;
  };

  const displayedButtons = getButtonsToDisplay();

  // Handle page change on button click
  const handlePageChange = (pageNumber: number) => {
    if (isEnabled && pageNumber > 0 && pageNumber <= totalPages) {
      setActivePage(pageNumber);
    }
  };


  // Log current page and enable status whenever activePage changes
  useEffect(() => {
    console.log('Current page:', activePage);
    console.log('Pagination enabled:', isEnabled);
  }, [activePage, isEnabled]);

  return (
    <div className="box-border relative w-[359px] h-[80px] bg-white border border-dashed border-[#9747FF] rounded-[5px]">
      <div className="flex flex-row items-center p-0 gap-[5px] absolute w-[319px] h-[40px] left-[20px] top-[20px] text-[16px] text-[#3E3232]">
        {displayedButtons.map((item, index) => (
          item === '...' ? (
            <span
              key={index}
              className="items-center justify-center flex flex-row items-start p-2 gap-2.5 w-[40px] h-[40px] rounded-[12px] cursor-pointer"
            >
              {item}
            </span>
          ) : (
            <p
              key={index}
              className={cn(
                "items-center justify-center flex flex-row items-start p-2 gap-2.5 w-[40px] h-[40px] rounded-[12px] cursor-pointer",
                { 'bg-[#F5F5F5]': activePage === item }
              )}
              onClick={() => handlePageChange(item as number)}
            >
              {item}
            </p>
          )
        ))}
        <div
          className={cn(
            "flex items-center justify-center p-2 gap-2.5 w-[80px] h-[40px] rounded-[12px] cursor-pointer bg-[#F5F5F5]",
            {
              'cursor-not-allowed': activePage === numberOfPages[numberOfPages.length - 1] || !isEnabled
            }
          )}
          onClick={() => handlePageChange(activePage + 1)}
        >
          <p className="text-[#3E3232]">Next</p>
          <Icon icon="tabler:math-greater" className=" h-4 font-fa-solid text-black/50 " />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
