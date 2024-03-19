import React from 'react';
import Image from 'next/image';

export const ProfilePicture = () => {
    return (
        <div className="relative min-h-80 min-w-60">
            <Image
                src="/assets/3x4.png"
                alt="profile-picture"
                fill
                className="rounded-[2rem] object-contain"
            />
        </div>
    );
};
