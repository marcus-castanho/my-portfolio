import React, { FC, Suspense } from 'react';
import { Main } from '@/components/Main';
import { Header } from '@/components/Header';
import { Article, getArticles } from '@/services/devToApi/routes/getArticles';
import { log } from '@/logger';
import { Navigation } from './components/Navigation';
import { ArticlesList } from './components/ArticlesList';
import { PageTitle } from '@/components/PageTitle';
import { NoContentMessage } from '@/components/NoContentMessage';
import { LoadingBlogPosts } from './LoadingBlogPosts';

const SuspenseBlogPosts: FC<BlogProps> = async ({ page }) => {
    const DEV_TO_PROFILE_USERNAME = 'marcus_castanho';
    const ITEMS_PER_PAGE = 12;

    const handleRequestResponse = async (
        reqFnPromise: ReturnType<typeof getArticles>,
    ) => {
        return reqFnPromise
            .then(({ success, data }) => {
                if (!success) return { pages: 0, items: [] as Article[] };

                return data;
            })
            .catch((error) => {
                log({ payload: error, message: error.message, level: 'error' });
                return { pages: 0, items: [] as Article[] };
            });
    };

    const articles = await handleRequestResponse(
        getArticles(
            {
                limit: ITEMS_PER_PAGE,
                page,
                username: DEV_TO_PROFILE_USERNAME,
            },
            { type: 'SSR', options: { cache: 'no-store' } },
        ),
    );

    const nextPageArticles = await handleRequestResponse(
        getArticles(
            {
                limit: ITEMS_PER_PAGE,
                page: page + 1,
                username: DEV_TO_PROFILE_USERNAME,
            },
            { type: 'SSR', options: { cache: 'no-store' } },
        ),
    );

    const isLastPage =
        articles.items.length < ITEMS_PER_PAGE ||
        nextPageArticles.items.length === 0;
    const dinamicTotalPages = isLastPage ? page : page + 1;
    const pageIsEmpty = articles.items.length === 0;

    if (pageIsEmpty)
        return (
            <div className="flex flex-1 justify-center">
                <NoContentMessage />
            </div>
        );

    return (
        <div className="flex flex-1 flex-col sm:max-w-[90%]">
            <div className="flex flex-1 flex-col p-8">
                <ArticlesList articles={articles.items} />
                <Navigation initialPage={page} totalPages={dinamicTotalPages} />
            </div>
        </div>
    );
};

type BlogProps = {
    page: number;
};
export const Blog: FC<BlogProps> = async (props) => {
    return (
        <Main>
            <div className="flex h-full flex-col items-center">
                <Header />
                <PageTitle title="blog" />
                <Suspense fallback={<LoadingBlogPosts />}>
                    <SuspenseBlogPosts {...props} />
                </Suspense>
            </div>
        </Main>
    );
};
