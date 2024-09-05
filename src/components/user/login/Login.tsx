import React, { useState } from 'react';
import { Dropdown, Space } from 'antd';
import { items } from "@/pages/kiet/datatest";
import { cn } from "@/lib/cn";
import { Iconfy } from '@/components/Iconfy';
import Avatar from '@/components/avatar/Avatar';

type beforeLogin = {
    name: string;
    avatar?: string;
}

const beforeLogin: React.FC<beforeLogin> = ({ name, avatar }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleVisibleChange = (open: boolean) => {
        setIsOpen(open);
    };

    return (
        <div className="flex gap-2 w-[134px] h-[48px] cursor-pointer border-4 border-black">
            <Dropdown
                menu={{ items }}     //data item
                onOpenChange={handleVisibleChange}
                trigger={['click']}
            >
                <Space>
                    <Avatar
                        avatar={avatar}
                        containerProps={{
                            className: "w-12 h-12 rounded-lg flex-none order-0",
                        }}
                    />
                    <span className="font-roboto font-medium text-[16px] leading-[19px] capitalize text-black flex-none order-1">
                        {name}
                    </span>
                    <Iconfy
                        icon="solar:alt-arrow-up-linear"
                        className={cn(
                            'flex-none order-2 transition-transform duration-300',
                            {
                                'rotate-180': isOpen,
                            }
                        )}
                    />
                </Space>
            </Dropdown>
        </div>
    );
};

export default beforeLogin;
