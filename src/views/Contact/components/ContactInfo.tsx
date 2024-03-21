import React from 'react';
import Link from 'next/link';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { TwitterIcon } from '@/components/icons/TwitterIcon';
import { SOCIAL_MEDIA_PROFILE_LINKS } from '@/config/consts';

const LinksContainer = () => {
    return (
        <div className="flex gap-4">
            <Link href={SOCIAL_MEDIA_PROFILE_LINKS.github} target="_blank">
                <GitHubIcon size={32} fillColor="white" />
            </Link>
            <Link href={SOCIAL_MEDIA_PROFILE_LINKS.linkedin} target="_blank">
                <LinkedInIcon size={32} fillColor="white" />
            </Link>
            <Link href={SOCIAL_MEDIA_PROFILE_LINKS.twitter} target="_blank">
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
