import type { MenuProps } from 'antd';
import { createMenuItem } from '@/components/user/dropDown/menuItem'; 


export const items: MenuProps['items'] = [
  createMenuItem({
    label: '1st',
    to: '/',
    key: '0',
  }),
  createMenuItem({
    label: '2nd',
    to: '/',
    key: '1',
  }),
  createMenuItem({
    label: '3rd  item',
    to: '/', 
    key: '2',
  }),
];
