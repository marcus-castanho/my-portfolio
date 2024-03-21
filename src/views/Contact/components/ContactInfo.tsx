import React from 'react';
import Link from 'next/link';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { TwitterIcon } from '@/components/icons/TwitterIcon';

const LinksContainer = () => {
    const GITHUB_URL = 'https://github.com/marcus-castanho';
    const LINKEDIN_URL = 'https://www.linkedin.com/in/marcus-castanho';
    const TWITTER_URL = 'https://twitter.com/marcus_castanho';

    return (
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
    );
};

export const ContactInfo = () => {
    return (
        <div className="flex flex-col items-start gap-8 sm:gap-16">
            <div className="flex flex-col gap-4">
                <h2 className="text-3xl">{`Contact me`}</h2>{' '}
                <p className="text-lg">{`Send me a message and I'll reply to you in your email`}</p>
            </div>
            <div className="flex flex-col items-start gap-4">
                <h2 className="text-3xl">{`or`}</h2>
                <p>get in touch with me through social media:</p>
                <LinksContainer />
            </div>
        </div>
    );
};
