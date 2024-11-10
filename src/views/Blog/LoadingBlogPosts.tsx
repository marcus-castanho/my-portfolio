import { Spinner } from '@/components/Spinner';
import React from 'react';

export const LoadingBlogPosts = () => {
    return (
        <div className="flex flex-1 flex-col justify-center sm:max-w-[90%]">
            <Spinner size="large" />
        </div>
    );
};
