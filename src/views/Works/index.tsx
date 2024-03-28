import React from 'react';
import { Main } from '@/components/Main';
import { Header } from '@/components/Header';
import { PageTitle } from '@/components/PageTitle';
import { ProjectsList } from './components/ProjectsList';

export const Works = () => {
    return (
        <Main>
            <div className="flex h-full flex-col items-center">
                <Header />
                <PageTitle title="works" />
                <div className="flex flex-1 flex-col sm:max-w-[90%]">
                    <div className="flex w-full flex-1 flex-col items-center p-8">
                        <ProjectsList />
                    </div>
                </div>
            </div>
        </Main>
    );
};
