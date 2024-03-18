import React from 'react';
import { Card } from './Card';
import Link from 'next/link';

export const BlogCard = () => {
    return (
        <Link href="/blog">
            <Card type="blog">
                <div className="flex h-full items-center justify-start">
                    <h2 className="text-2xl text-black">Blog</h2>
                </div>
            </Card>
        </Link>
    );
};
