import { Iconfy } from '@/components/Iconfy';
import React from 'react';

interface afterLogin  {
    Login?: string;
    Register?: string;
}

const notLogin: React.FC<afterLogin > = ({
    Login = "/",
    Register = "/"
}) => {
    return (
        <div className="flex flex-row items-center p-0 gap-2 w-[168px] h-[48px] left-[20px] top-[20px]">
            <div className="w-[48px] h-[48px] bg-gray-200 rounded-[12px] flex items-center justify-center">
                <Iconfy icon="tdesign:user" className="w-[20px] h-[20px]" />
            </div>
            <div className="w-[112px] h-[19px] text-base font-medium text-black">
                <a href={Login}>Login</a>
                <span className="mx-1">|</span>
                <a href={Register}>Register</a>
            </div>
        </div>
    );
};

export default notLogin;
