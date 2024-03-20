import React from 'react';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { PageTitle } from '@/components/PageTitle';
import { NoContentMessage } from '@/components/NoContentMessage';

export const Contact = () => {
    return (
        <Main>
            <div className="flex h-full flex-col">
                <Header />
                <PageTitle title="contact" />
                <div className="flex flex-1 items-center justify-center">
                    <NoContentMessage />
                </div>
            </div>
        </Main>
    );
};
