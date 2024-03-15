import React, { FC } from 'react';
import Link from 'next/link';
import { ClientWrapper } from './components/ClientWrapper';
import { ResetButton } from './components/ResetButton';

export type ErrorProps = {
    error: Error;
    reset: () => void;
};

export const Error: FC<ErrorProps> = ({ error, reset }) => {
    return (
        <ClientWrapper error={error}>
            <div className="h-screen">
                <div className="flex h-full w-full items-center justify-center">
                    <div className="flex flex-col items-center">
                        <h1 className="flex justify-center px-6 py-10 text-center text-3xl font-bold sm:text-left">
                            Sorry, something went wrong
                        </h1>
                        <div className="pb-10">
                            <ResetButton reset={reset} />
                        </div>
                        <Link href="/" target="_self" aria-label="home-link">
                            Go Home
                        </Link>
                    </div>
                </div>
            </div>
        </ClientWrapper>
    );
};
