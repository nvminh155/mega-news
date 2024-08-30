
export interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  buttonsToShow?: number;
  isEnabled?: boolean;
}
 
export type PageNumber = number | '...';
