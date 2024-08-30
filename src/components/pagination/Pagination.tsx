import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/cn';
import { Iconfy } from '../Iconfy';
import { PaginationProps } from './type/types';
import { getButtonsToDisplay } from './util';

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  initialPage = 1,
  buttonsToShow = 4,
  isEnabled = true,
}) => {

  const [activePage, setActivePage] = useState(initialPage);

  const displayedButtons = getButtonsToDisplay(activePage, totalPages, buttonsToShow, isEnabled);

  const handlePageChange = (pageNumber: number) => {
    if (isEnabled && pageNumber > 0 && pageNumber <= totalPages) {
      setActivePage(pageNumber);
    }
  };

  useEffect(() => {
    console.log('Current page:', activePage);
    console.log('Pagination enabled:', isEnabled);
  }, [activePage, isEnabled]);

  return (
    <div className="relative w-[359px] h-[80px] bg-white rounded-[5px]">
      <div className="flex flex-row items-center p-0 gap-[5px] absolute w-[319px] h-[40px] left-[20px] top-[20px] text-[16px] text-[#3E3232]">

        <a
          href="#"
          className={cn(
            'flex items-center justify-center p-2 gap-2.5 w-[80px] h-[40px] rounded-[12px] cursor-pointer bg-[#F5F5F5]',
            {
              hidden: activePage === 1,
            }
          )}
          onClick={() => handlePageChange(activePage - 1)}
        >
          Prev
        </a>

        {displayedButtons.map((item, index) =>
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
                'items-center justify-center flex flex-row items-start p-2 gap-2.5 w-[40px] h-[40px] rounded-[12px] cursor-pointer',
                { 'bg-[#F5F5F5]': activePage === item }
              )}
              onClick={() => handlePageChange(item as number)}
            >
              {item}
            </p>
          )
        )}

        <div
          className={cn(
            'flex items-center justify-center p-2 gap-2.5 w-[80px] h-[40px] rounded-[12px] cursor-pointer bg-[#F5F5F5]',
            {
              'cursor-not-allowed': activePage === totalPages || !isEnabled,
            }
          )}
          onClick={() => handlePageChange(activePage + 1)}
        >
          <p className="text-[#3E3232]">Next</p>
          <Iconfy icon="tabler:math-greater" className="h-4 font-fa-solid text-black/50" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
