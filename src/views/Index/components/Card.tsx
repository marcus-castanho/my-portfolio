import classNames from 'classnames';
import React, { FC, ReactNode } from 'react';
import { match } from 'ts-pattern';

type CardProps = {
    children: ReactNode;
    type: 'greetings' | 'work' | 'about' | 'contact' | 'blog';
};

export const Card: FC<CardProps> = ({ children, type }) => {
    return (
        <div className="h-full w-full p-1">
            <div
                className={classNames(
                    'h-full rounded-[3rem] p-4 hover:brightness-125 sm:p-11',
                    match(type)
                        .with('greetings', () => 'bg-blue-800')
                        .with('work', () => 'bg-gray-200')
                        .with('about', () => 'bg-gray-900')
                        .with('contact', () => 'bg-yellow-200')
                        .with('blog', () => 'bg-blue-300')
                        .otherwise(() => 'bg-white'),
                )}
            >
                {children}
            </div>
        </div>
    );
};
