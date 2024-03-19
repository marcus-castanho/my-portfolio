'use client';

import React, { FC } from 'react';
import { usePagination } from '@/hooks/usePagination';
import { PaginationNav } from '@/components/PaginationNav';

type NavigationProps = {
    totalPages: number;
};

export const Navigation: FC<NavigationProps> = ({ totalPages }) => {
    const { page, changePage, getPagesIndexes } = usePagination();

    return (
        <PaginationNav
            page={page}
            changePage={changePage}
            pagesIndexes={getPagesIndexes(totalPages, 5).indexesArr}
        />
    );
};
