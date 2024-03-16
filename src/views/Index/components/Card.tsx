import React, { FC, ReactNode } from 'react';
import { match } from 'ts-pattern';

type CardProps = {
    children: ReactNode;
    type: 'greetings' | 'work' | 'about' | 'contact';
};

export const Card: FC<CardProps> = ({ children, type }) => {
    return (
        <div className="h-full w-full p-1">
            <div
                className={match(type)
                    .with(
                        'greetings',
                        () =>
                            'h-full rounded-[4rem]  bg-[#2800E8] p-11 hover:brightness-125',
                    )
                    .with(
                        'work',
                        () =>
                            'h-full rounded-[4rem] bg-gray-200 p-11 hover:brightness-125',
                    )
                    .with(
                        'about',
                        () =>
                            'h-full rounded-[4rem] bg-[#1B1B1F] p-11 hover:brightness-125',
                    )
                    .with(
                        'contact',
                        () =>
                            'h-full rounded-[4rem] bg-[#FFF480] p-11 hover:brightness-125',
                    )
                    .otherwise(() => 'h-full rounded-[4rem] bg-white p-11')}
            >
                {children}
            </div>
        </div>
    );
};
