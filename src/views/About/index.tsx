import React from 'react';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { PageTitle } from '@/components/PageTitle';
import { CareerPath } from './components/CareerPath';

export const About = () => {
    return (
        <Main>
            <div className="flex h-full flex-col items-center">
                <Header />
                <PageTitle title="about" />
                <div className="flex flex-1 items-center justify-center p-8 md:landscape:max-w-[90%]">
                    <div className="flex flex-col gap-8">
                        <p className="text-justify">{`I am a Full-stack and mobile developer with over 4 years of experience building web and mobile products end-to-end. I’ve delivered production apps and marketing sites from scratch, working closely with designers and founders while integrating backend services, authentication, AI features, and responsive UI. I focus on crafting intuitive user experiences, clean architecture, and shipping value quickly in fast-paced environments`}</p>
                        <p>{`My career path so far: `}</p>
                        <CareerPath />
                    </div>
                </div>
            </div>
        </Main>
    );
};
