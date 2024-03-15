import React from 'react';
import { PageContainer } from '@/components/PageContainer';
import { Main } from '@/components/Main';
import Link from 'next/link';

export const NotFound = () => {
    return (
        <PageContainer>
            <Main>
                <div className="flex w-full items-center justify-center">
                    <div className="flex flex-col items-center">
                        <h1 className="px-6 pb-4 pt-10 text-center text-5xl font-bold sm:text-left">
                            Page not found
                        </h1>
                        <p className="px-6 pb-10 text-center text-gray-100 sm:text-left">
                            The resource you are looking for could not be found
                        </p>
                        <Link href="/" target="_self" aria-label="home-link">
                            Go Home
                        </Link>
                    </div>
                </div>
            </Main>
        </PageContainer>
    );
};
