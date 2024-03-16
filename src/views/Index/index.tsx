import React from 'react';
import Image from 'next/image';
import { Card } from './components/Card';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import Link from 'next/link';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { TwitterIcon } from '@/components/icons/TwitterIcon';

const ProfilePicture = () => {
    return (
        <div className="relative min-h-80 min-w-60">
            <Image
                src="/assets/3x4.png"
                alt="profile-picture"
                fill
                objectFit="contain"
                className="rounded-[2rem]"
            />
        </div>
    );
};

const Presentation = () => {
    return (
        <div className="flex flex-col gap-6 p-12">
            <p className="text-lg">Hi!🖐</p>
            <h1 className="text-5xl">{`I'm Marcus`}</h1>
            <p className="text-lg">
                {`I am a software developer from Brazil who likes to build
        scalable back end services and user friendly front
        end applications.`}
            </p>
        </div>
    );
};

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

const BlogCard = () => {
    return (
        <Card type="blog">
            <div className="flex h-full items-center justify-start">
                <h2 className="text-2xl text-black">Blog</h2>
            </div>
        </Card>
    );
};

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
