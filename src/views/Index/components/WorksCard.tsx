import React from 'react';
import { Card } from './Card';
import Link from 'next/link';

export const WorksCard = () => {
    return (
        <Link href="/works">
            <Card type="work">
                <div className="flex h-full items-center justify-start">
                    <h2 className="text-2xl text-black">My works</h2>
                </div>
            </Card>
        </Link>
    );
};
