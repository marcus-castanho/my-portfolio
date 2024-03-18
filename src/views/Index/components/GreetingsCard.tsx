import React from 'react';
import { Card } from './Card';
import Link from 'next/link';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { TwitterIcon } from '@/components/icons/TwitterIcon';

export const GreetingsCard = () => {
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
