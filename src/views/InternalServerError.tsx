import React from 'react';
import { Main } from '@/components/Main';
import Link from 'next/link';

export const InternalServerError = () => {
    return (
        <Main>
            <div className="flex h-full flex-col justify-center">
                <div className="flex w-full items-center justify-center">
                    <div className="flex flex-col items-center">
                        <h1 className="flex justify-center px-6 pb-4 pt-10 text-center text-5xl font-bold sm:text-left">
                            500 - Internal server error
                        </h1>
                        <p className="px-6 pb-10">
                            Sorry, something went wrong
                        </p>
                        <Link
                            href="/"
                            target="_self"
                            aria-label="home-link"
                            className="hover:underline"
                        >
                            Go Home
                        </Link>
                    </div>
                </div>
            </div>
        </Main>
    );
};
