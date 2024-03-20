import React from 'react';
import { DEVtoIcon } from './icons/DEVtoIcon';

export const DEVtoLogo = () => {
    return (
        <div className="relative">
            <div className="absolute bottom-0 right-full z-10 h-6 w-6 translate-x-[-0.25rem] translate-y-[-0.25rem] bg-white" />
            <div className="absolute bottom-0 right-full z-20">
                <DEVtoIcon fillColor="black" size={32} />
            </div>
        </div>
    );
};
