import React from 'react';
import type { MenuProps } from 'antd';
import AppLink from '@/components/AppLink';
import { TRoutePaths } from '@/routes';

type MenuItemProps = {
  label: string | React.ReactNode;
  to: TRoutePaths;
  key: string;
  disabled?: boolean;
  target?: string;
  rel?: string;
  params?: Record<string, string>;
}

export const createMenuItem = ({
  label,
  to,
  key,
  disabled = false,
  target = "_self",
  rel = "",
  params,
}: MenuItemProps): Required<MenuProps>['items'][number] => {
  return {
    label: (
      <AppLink
        to={to}
        params={params}
        target={target}
        rel={rel}
        className="flex items-center p-0 gap-1.5 w-[82px] h-[16px] flex-none"
      >
        {label}
      </AppLink>
    ),
    key,
    disabled,
  };
};
