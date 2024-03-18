import React from 'react';
import { ProfilePicture } from './components/ProfilePicture';
import { Presentation } from './components/Presentation';
import { GreetingsCard } from './components/GreetingsCard';
import { WorksCard } from './components/WorksCard';
import { AboutCard } from './components/AboutCard';
import { ContactCard } from './components/ContactCard';
import { BlogCard } from './components/BlogCard';
import { Main } from '@/components/Main';

const ProfileHero = () => {
    return (
        <div className="flex h-full max-sm:flex-col-reverse max-sm:items-center max-sm:justify-center max-sm:pb-8">
            <div className="flex w-[40%] items-center justify-center">
                <ProfilePicture />
            </div>
            <div className="flex w-[90%] items-center sm:w-[60%]">
                <Presentation />
            </div>
        </div>
    );
};

const CardsGrid = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-4 sm:h-full sm:grid-cols-[20%_20%_30%_30%] sm:grid-rows-2">
            <div className="col-span-2 row-span-1 sm:col-span-1 sm:row-span-2">
                <GreetingsCard />
            </div>
            <div className="col-span-1 row-span-2 sm:col-span-1 sm:row-span-2">
                <AboutCard />
            </div>
            <div className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-1">
                <WorksCard />
            </div>
            <div className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-1">
                <BlogCard />
            </div>
            <div className="col-span-2 row-span-1 sm:col-span-2 sm:row-span-1">
                <ContactCard />
            </div>
        </div>
    );
};

export const Index = () => {
    return (
        <Main>
            <div className="flex h-full flex-col">
                <div className="sm:h-[60%]">
                    <ProfileHero />
                </div>
                <div className="sm:h-[40%]">
                    <CardsGrid />
                </div>
            </div>
        </Main>
    );
};
