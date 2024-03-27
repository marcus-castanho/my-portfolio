import React from 'react';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { PageTitle } from '@/components/PageTitle';
import { CarrerPath } from './components/CarrerPath';

export const About = () => {
    return (
        <Main>
            <div className="flex h-full flex-col items-center">
                <Header />
                <PageTitle title="about" />
                <div className="flex flex-1 items-center justify-center p-8 sm:max-w-[90%]">
                    <div className="flex flex-col gap-8">
                        <p>{`I am a software developer with over 2 years of experience developing software applications. As a developer, in the back end I have experience with the development and integration of API's, technologies related to NodeJS and TypeScript, framework NestJS, MongoDB, SQL and relational databases, git and object-oriented programming. In the front end, I have experience working with HTML, CSS, TypeScript/JavaScript and React. I also have some knowledge of CI/CD using Github actions and Docker.`}</p>
                        <p>{`My carrer path so far: `}</p>
                        <CarrerPath />
                    </div>
                </div>
            </div>
        </Main>
    );
};
