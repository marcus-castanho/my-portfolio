import React, { FC, ReactNode } from 'react';

type RootProps = {
    children: ReactNode;
    inputId: string;
    label: string;
    required?: boolean;
};

export const Root: FC<RootProps> = ({
    children,
    inputId,
    label,
    required = false,
}) => {
    return (
        <div className="flex flex-col justify-end px-8 py-4">
            <label htmlFor={inputId} className="block pb-2 font-bold">
                {label}
                {required && <span className="text-secondary-red pl-1">*</span>}
            </label>
            {children}
        </div>
    );
};
