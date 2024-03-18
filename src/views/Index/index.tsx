import React from 'react';
import { ProfilePicture } from './components/ProfilePicture';
import { Presentation } from './components/Presentation';
import { GreetingsCard } from './components/GreetingsCard';
import { WorksCard } from './components/WorksCard';
import { AboutCard } from './components/AboutCard';
import { ContactCard } from './components/ContactCard';
import { BlogCard } from './components/BlogCard';

export const Index = () => {
    return (
        <main className="h-[100dvh]">
            <div className="flex h-full flex-col">
                <div className="flex max-sm:flex-col-reverse max-sm:items-center max-sm:justify-center max-sm:pb-8 sm:h-[60%]">
                    <div className="flex w-[40%] items-center justify-center">
                        <ProfilePicture />
                    </div>
                    <div className="flex w-[90%] items-center sm:w-[60%]">
                        <Presentation />
                    </div>
                </div>
                <div className="flex flex-col-reverse sm:h-[40%] sm:flex-row">
                    <div className="w-full sm:w-[20%]">
                        <GreetingsCard />
                    </div>
                    <div className="flex w-full flex-col sm:w-[80%] sm:flex-row">
                        <div className="w-full sm:w-[25%]">
                            <AboutCard />
                        </div>
                        <div className="w-full sm:w-[75%]">
                            <div className="flex h-1/2">
                                <WorksCard />
                                <BlogCard />
                            </div>
                            <div className="h-1/2">
                                <ContactCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
