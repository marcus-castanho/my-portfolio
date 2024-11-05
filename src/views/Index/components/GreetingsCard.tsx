import React from 'react';
import { Card } from './Card';
import Link from 'next/link';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { TwitterIcon } from '@/components/icons/TwitterIcon';
import { SOCIAL_MEDIA_PROFILE_LINKS } from '@/config/consts';
import { BlueskyIcon } from '@/components/icons/BlueskyIcon';

export const GreetingsCard = () => {
    return (
        <Card type="greetings">
            <div className="flex h-full flex-col items-center justify-center gap-4">
                <h2 className="text-2xl">Say hello</h2>
                <div className="flex gap-4">
                    <Link
                        href={SOCIAL_MEDIA_PROFILE_LINKS.github}
                        target="_blank"
                    >
                        <GitHubIcon size={32} fillColor="white" />
                    </Link>
                    <Link
                        href={SOCIAL_MEDIA_PROFILE_LINKS.linkedin}
                        target="_blank"
                    >
                        <LinkedInIcon size={32} fillColor="white" />
                    </Link>
                    <Link
                        href={SOCIAL_MEDIA_PROFILE_LINKS.twitter}
                        target="_blank"
                    >
                        <TwitterIcon size={32} fillColor="white" />
                    </Link>
                    <Link
                        href={SOCIAL_MEDIA_PROFILE_LINKS.bluesky}
                        target="_blank"
                    >
                        <BlueskyIcon size={32} fillColor="white" />
                    </Link>
                </div>
                <Link
                    href={'/links'}
                    target="_blank"
                    className="hover:underline"
                >
                    Other links
                </Link>
            </div>
        </Card>
    );
};
