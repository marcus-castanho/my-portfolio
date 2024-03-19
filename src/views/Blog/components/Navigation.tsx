'use client';

import React, { FC } from 'react';
import { usePagination } from '@/hooks/usePagination';
import { PaginationNav } from '@/components/PaginationNav';
import { usePathname, useRouter } from 'next/navigation';
import { match } from 'ts-pattern';

type NavigationProps = {
    initialPage: number;
    totalPages: number;
};

export const Navigation: FC<NavigationProps> = ({
    initialPage,
    totalPages,
}) => {
    const pathname = usePathname();
    const router = useRouter();
    const { page, getPagesIndexes } = usePagination(initialPage);

    return (
        <PaginationNav
            page={page}
            changePage={(selectedPage) => {
                const pageToGo = match(selectedPage)
                    .with('previous', () => {
                        const previousPage = page - 1;
                        return previousPage <= 0 ? 1 : previousPage;
                    })
                    .with('next', () => {
                        const previousPage = page + 1;
                        return previousPage >= totalPages
                            ? totalPages
                            : previousPage;
                    })
                    .otherwise(() => selectedPage);
                router.push(`${pathname}?page=${pageToGo}`);
            }}
            pagesIndexes={getPagesIndexes(totalPages, 5).indexesArr}
        />
    );
};
