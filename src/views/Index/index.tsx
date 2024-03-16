import React from 'react';
import { Main } from '@/components/Main';
import { PageContainer } from '@/components/PageContainer';
import Image from 'next/image';
import { Card } from './components/Card';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import Link from 'next/link';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { TwitterIcon } from '@/components/icons/TwitterIcon';

const GreetingsCard = () => {
    const GITHUB_URL = 'https://github.com/marcus-castanho';
    const LINKEDIN_URL = 'https://www.linkedin.com/in/marcus-castanho';
    const TWITTER_URL = 'https://twitter.com/marcus_castanho';
    const OTHER_LINKS_URL = 'https://marcuscastanho.bio.link';

    return (
        <Card type="greetings">
            <div className="flex h-full flex-col items-center justify-center gap-4">
                <h2 className="text-2xl">Say hello</h2>
                <div className="flex gap-4">
                    <Link href={GITHUB_URL} target="_blank">
                        <GitHubIcon size={32} fillColor="white" />
                    </Link>
                    <Link href={LINKEDIN_URL} target="_blank">
                        <LinkedInIcon size={32} fillColor="white" />
                    </Link>
                    <Link href={TWITTER_URL} target="_blank">
                        <TwitterIcon size={32} fillColor="white" />
                    </Link>
                </div>
                <Link
                    href={OTHER_LINKS_URL}
                    target="_blank"
                    className="hover:underline"
                >
                    Other links
                </Link>
            </div>
        </Card>
    );
};

const WorksCard = () => {
    return (
        <Card type="work">
            <div className="flex h-full items-center justify-start">
                <h2 className="text-2xl text-black">My works</h2>
            </div>
        </Card>
    );
};

const AboutCard = () => {
    return (
        <Card type="about">
            <div className="flex h-full items-center justify-start">
                <h2 className="text-2xl">About</h2>
            </div>
        </Card>
    );
};

const ContactCard = () => {
    return (
        <Card type="contact">
            <div className="flex h-full items-center justify-start">
                <h2 className="text-2xl text-black">Contact</h2>
            </div>
        </Card>
    );
};

export const Index = () => {
    return (
        <PageContainer>
            <Main>
                <div className="flex w-full flex-col">
                    <div className="flex h-[60%]">
                        <div className="flex h-full w-[40%] items-center justify-center">
                            <div className="relative min-h-80 min-w-60">
                                <Image
                                    src="/assets/3x4.png"
                                    alt="profile-picture"
                                    fill
                                    objectFit="contain"
                                    className="rounded-[2rem]"
                                />
                            </div>
                        </div>
                        <div className="flex h-full w-[60%] flex-col items-start justify-center gap-6 p-12">
                            <p className="text-lg">Hi!🖐</p>
                            <h1 className="text-5xl">Marcus</h1>
                            <p className="text-lg">
                                {`I'm a software developer from Brazil who likes to build
                                scalable back end services and user friendly front
                                end applications.`}
                            </p>
                        </div>
                    </div>
                    <div className="flex h-[40%]">
                        <div className="w-[40%]">
                            <GreetingsCard />
                        </div>
                        <div className="w-[60%]">
                            <div className="flex h-1/2">
                                <WorksCard />
                                <AboutCard />
                            </div>
                            <div className="h-1/2">
                                <ContactCard />
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        </PageContainer>
    );
};
