import React, { FC } from 'react';

type PageTitleProps = {
    title: string;
};

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
    return (
        <div className="flex items-center justify-center">
            <h1 className="text-4xl font-semibold">
                <span className="opacity-70">/</span>
                {title}
            </h1>
        </div>
    );
};
