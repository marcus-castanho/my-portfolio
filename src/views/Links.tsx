import React from 'react';
import { redirect } from 'next/navigation';
import { SOCIAL_MEDIA_PROFILE_LINKS } from '@/config/consts';

export const Links = () => {
    redirect(SOCIAL_MEDIA_PROFILE_LINKS.bio_link);
    return <></>;
};
