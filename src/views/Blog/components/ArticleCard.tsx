import React, { FC } from 'react';
import { Article } from '@/services/devToApi/routes/getArticles';
import Link from 'next/link';
import Image from 'next/image';
import { format, isValid } from 'date-fns';
import { DEVtoLogo } from '@/components/DEVtoLogo';

type ArticleCardProps = {
    article: Article;
};

export const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
    const publicationDate = new Date(article.published_at);

    return (
        <Link href={article.url} target="_blank">
            <div className="w-[calc(100px*3)] hover:brightness-125 sm:w-[calc(100px*5)] md:w-[calc(100px*4)]">
                <div className="relative h-[calc(42px*3)] max-h-[calc(42px*3)] sm:h-[calc(42px*5)] sm:max-h-[calc(42px*5)] md:h-[calc(42px*4)] md:max-h-[calc(42px*4)]">
                    <Image
                        src={article.cover_image}
                        alt="article-cover-image"
                        fill
                        className="rounded-t-[2rem] object-contain"
                    />
                </div>
                <div className="flex h-80 w-full flex-col justify-between gap-4 rounded-b-[2rem] bg-gray-950 p-4 sm:h-72">
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
