import React, { FC } from 'react';
import Image from 'next/image';
import { match } from 'ts-pattern';

type DEVtoLogoProps = {
    size: 8 | 16 | 24 | 32 | 36 | 40 | 48;
};

export const DEVtoLogo: FC<DEVtoLogoProps> = ({ size }) => {
    return (
        <div
            className={match(size)
                .with(8, () => 'min-w- relative min-h-1 min-w-1')
                .with(16, () => 'min-w- relative min-h-4 min-w-4')
                .with(24, () => 'min-w- relative min-h-6 min-w-6')
                .with(32, () => 'min-w- relative min-h-8 min-w-8')
                .with(36, () => 'min-w- relative min-h-9 min-w-9')
                .with(40, () => 'min-w- relative min-h-10 min-w-10')
                .with(48, () => 'min-w- relative min-h-12 min-w-12')
                .otherwise(() => 'min-w- relative min-h-9 min-w-9')}
        >
            <Image
                src="/assets/dev-black.png"
                alt="DEV-to-logo"
                fill
                className="object-contain"
            />
        </div>
    );
};
