'use client';

import React, { useEffect, FC, ReactNode } from 'react';
import { handleClientError } from '@/errors/clientErrorHandlers';

type ClientWrapperProps = {
    children: ReactNode;
    error: Error;
};

export const ClientWrapper: FC<ClientWrapperProps> = ({ children, error }) => {
    useEffect(() => {
        if (!error) return;
        handleClientError(error);
    }, [error]);

    return <>{children}</>;
};
