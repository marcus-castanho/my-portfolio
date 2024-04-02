import React, { FC, ReactNode } from 'react';

type MainProps = {
    children: ReactNode;
};
export const Main: FC<MainProps> = ({ children }) => {
    return (
        <main className="landscape:h-[200dvh] md:landscape:h-[100dvh]">
            {children}
        </main>
    );
};
