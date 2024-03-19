import React from 'react';
import { Blog as BlogPage } from '@/views/Blog';

type BlogProps = {
    searchParams?: { [key: string]: string | string[] | undefined };
};

export default function Blog({ searchParams }: BlogProps) {
    const page =
        !!searchParams &&
        !!searchParams['page'] &&
        Number.isInteger(parseInt(`${searchParams['page']}`))
            ? parseInt(`${searchParams['page']}`)
            : 1;

    return <BlogPage page={page} />;
}
