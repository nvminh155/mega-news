import { PageNumber } from './type/types';

export const getButtonsToDisplay = (
    activePage: number,
    totalPages: number,
    buttonsToShow: number,
    isEnabled: boolean
): PageNumber[] => {
    const numberOfPages = Array.from({ length: totalPages }, (_, i) => i + 1);

    if (!isEnabled || numberOfPages.length <= buttonsToShow) {
        return numberOfPages;
    }
  
    const dots = '...';
    let tempNumberOfPages: PageNumber[] = [];

    if (activePage <= Math.ceil(buttonsToShow / 2)) {
        tempNumberOfPages = [
            ...numberOfPages.slice(0, buttonsToShow - 1),
            dots,
            numberOfPages[numberOfPages.length - 1],
        ];
    } else if (activePage >= numberOfPages.length - Math.floor(buttonsToShow / 2)) {
        tempNumberOfPages = [
            1,
            dots,
            ...numberOfPages.slice(numberOfPages.length - buttonsToShow + 1),
        ];
    } else {
        tempNumberOfPages = [
            1,
            dots,
            activePage,
            dots,
            numberOfPages[numberOfPages.length - 1],
        ];
    }

    return tempNumberOfPages;
};
