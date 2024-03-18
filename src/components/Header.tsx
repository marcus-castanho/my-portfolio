import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

export const Header = () => {
    return (
        <header className="flex justify-between p-5">
            <Link href={'/'} aria-label="home-link">
                <ArrowLeftIcon size={32} fillColor="white" />
            </Link>
        </header>
    );
};
