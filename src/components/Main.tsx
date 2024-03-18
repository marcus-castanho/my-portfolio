import React, { FC, ReactNode } from 'react';

type MainProps = {
    children: ReactNode;
};
export const Main: FC<MainProps> = ({ children }) => {
    return <main className="h-[100dvh]">{children}</main>;
};
