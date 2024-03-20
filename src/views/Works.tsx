import React from 'react';
import { Main } from '@/components/Main';
import { Header } from '@/components/Header';
import { PageTitle } from '@/components/PageTitle';
import { NoContentMessage } from '@/components/NoContentMessage';

export const Works = () => {
    return (
        <Main>
            <div className="flex h-full flex-col">
                <Header />
                <PageTitle title="works" />
                <div className="flex flex-1 items-center justify-center">
                    <NoContentMessage />
                </div>
            </div>
        </Main>
    );
};
