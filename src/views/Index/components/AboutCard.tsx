import React from 'react';
import { Card } from './Card';
import Link from 'next/link';

export const AboutCard = () => {
    return (
        <Link href="/about">
            <Card type="about">
                <div className="flex h-full items-center justify-start">
                    <h2 className="text-2xl">About</h2>
                </div>
            </Card>
        </Link>
    );
};
