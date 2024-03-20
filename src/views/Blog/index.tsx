import React, { FC } from 'react';
import { Main } from '@/components/Main';
import { Header } from '@/components/Header';
import Image from 'next/image';
import { isValid, format } from 'date-fns';
import Link from 'next/link';
import { Article, getArticles } from '@/services/devToApi/routes/getArticles';
import { log } from '@/logger';
import { Navigation } from './components/Navigation';
import { DEVtoLogo } from '@/components/DEVtoLogo';

type ArticleCardProps = {
    article: Article;
};

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
    const publicationDate = new Date(article.published_at);

    return (
        <Link href={article.url} target="_blank">
            <div className="w-[calc(100px*3)] hover:brightness-125 sm:w-[calc(100px*5)] md:w-[calc(100px*4)]">
                <div className="relative h-[calc(42px*3)] max-h-[calc(42px*3)] sm:h-[calc(42px*5)] sm:max-h-[calc(42px*5)] md:h-[calc(42px*4)] md:max-h-[calc(42px*4)]">
                    <Image
                        src={article.cover_image}
                        alt="article-cover-image"
                        fill
                        className="rounded-t-lg object-contain"
                    />
                </div>
                <div className="flex h-80 w-full flex-col justify-between gap-4 rounded-b-lg bg-gray-950 p-4 sm:h-72">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-bold">{article.title}</h2>
                        <p className="overflow-hidden text-ellipsis">
                            {article.description}
                        </p>
                    </div>
                    <div className="flex items-end justify-between">
                        <time className="flex text-sm text-gray-200">
                            {isValid(publicationDate)
                                ? format(publicationDate, 'd MMMM y')
                                : ''}
                        </time>
                        <DEVtoLogo size={36} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

type BlogProps = {
    page: number;
};
export const Blog: FC<BlogProps> = async ({ page }) => {
    const DEV_TO_PROFILE_USERNAME = 'marcus_Castanho';
    const ITEMS_PER_PAGE = 9;
    const articles = await getArticles(
        {
            limit: ITEMS_PER_PAGE,
            page,
            username: DEV_TO_PROFILE_USERNAME,
        },
        { type: 'SSR', options: { cache: 'no-store' } },
    )
        .then(({ success, data }) => {
            if (!success) return { pages: 0, items: [] as Article[] };

            return data;
        })
        .catch((error) => {
            log({ payload: error, message: error.message, level: 'error' });
            return { pages: 0, items: [] as Article[] };
        });
    const nextPageArticles = await getArticles(
        {
            limit: ITEMS_PER_PAGE,
            page: page + 1,
            username: DEV_TO_PROFILE_USERNAME,
        },
        { type: 'SSR', options: { cache: 'no-store' } },
    )
        .then(({ success, data }) => {
            if (!success) return { pages: 0, items: [] as Article[] };

            return data;
        })
        .catch((error) => {
            log({ payload: error, message: error.message, level: 'error' });
            return { pages: 0, items: [] as Article[] };
        });
    const isLastPage =
        articles.items.length < ITEMS_PER_PAGE ||
        nextPageArticles.items.length === 0;
    const dinamicTotalPages = isLastPage ? page : page + 1;

    return (
        <Main>
            <div className="flex h-full flex-col">
                <Header />
                <div className="flex items-center justify-center">
                    <h1 className="text-4xl font-semibold">
                        <span className="opacity-70">/</span>blog
                    </h1>
                </div>
                <div className="flex flex-1 flex-col">
                    <div className="flex flex-1 flex-col p-8">
                        <div className="flex h-full items-center justify-center p-4 sm:p-8">
                            <div
                                className={
                                    articles.items.length < 3
                                        ? 'flex flex-col items-center justify-center gap-8 sm:flex-row'
                                        : 'grid grid-cols-1 gap-8 sm:grid-cols-3'
                                }
                            >
                                {articles.items.map((article, index) => {
                                    return (
                                        <ArticleCard
                                            key={index}
                                            article={article}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <Navigation
                            initialPage={page}
                            totalPages={dinamicTotalPages}
                        />
                    </div>
                </div>
            </div>
        </Main>
    );
};
