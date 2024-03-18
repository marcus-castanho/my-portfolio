import React from 'react';
import { Card } from './Card';
import Link from 'next/link';

export const ContactCard = () => {
    return (
        <Link href="/contact">
            <Card type="contact">
                <div className="flex h-full items-center justify-start">
                    <h2 className="text-2xl text-black">Contact</h2>
                </div>
            </Card>
        </Link>
    );
};
