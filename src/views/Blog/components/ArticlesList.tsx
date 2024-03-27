import React, { FC } from 'react';
import { Article } from '@/services/devToApi/routes/getArticles';
import { ArticleCard } from './ArticleCard';

type ArticlesListProps = {
    articles: Article[];
};

export const ArticlesList: FC<ArticlesListProps> = ({ articles }) => {
    return (
        <div className="flex h-full items-center justify-center p-4 sm:p-8">
            <div
                className={
                    articles.length < 3
                        ? 'flex flex-col items-center justify-center gap-8 sm:flex-row'
                        : 'grid grid-cols-1 gap-8 sm:grid-cols-2 2xl:grid-cols-3'
                }
            >
                {articles.map((article, index) => {
                    return <ArticleCard key={index} article={article} />;
                })}
            </div>
        </div>
    );
};
