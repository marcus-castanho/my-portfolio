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
        <div className="flex flex-col justify-end p-8">
            <label htmlFor={inputId} className="block pb-2 text-xl font-bold">
                {label}
                {required && <span className="text-secondary-red pl-1">*</span>}
            </label>
            {children}
        </div>
    );
};
