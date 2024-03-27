import React, { FC } from 'react';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { PageTitle } from '@/components/PageTitle';
import { match } from 'ts-pattern';

type TimeDahsedLineProps = {
    isSpacer?: boolean;
    start?: boolean;
    end?: boolean;
};
const TimeDahsedLine: FC<TimeDahsedLineProps> = ({ isSpacer, start, end }) => {
    return (
        <div className="flex flex-col items-center">
            {start && <div className="h-3 w-3 rounded-[50%] bg-white" />}
            {isSpacer ? (
                <div className="w-3" />
            ) : (
                <div className="h-[350px] w-0 border-[1px] border-dashed border-white" />
            )}
            {end && <div className="h-3 w-3 rounded-[50%] bg-white" />}
        </div>
    );
};

type TimePointProps = {
    isSpacer?: boolean;
    data?: {
        company: string;
        start: string;
        end: string;
        role: string;
        description: string;
    };
};
const TimePoint: FC<TimePointProps> = ({ isSpacer = false, data }) => {
    return (
        <div
            className={
                isSpacer
                    ? 'relative flex h-[350px] w-[300px] flex-col gap-4 p-4 max-sm:hidden sm:w-[400px]'
                    : 'relative flex h-[350px] w-[300px] flex-col gap-4 p-4 sm:w-[400px]'
            }
        >
            {!isSpacer && (
                <>
                    <div className="absolute left-0 top-0 translate-y-[-50%] p-4">
                        <h2 className="text-2xl font-bold">{data?.company}</h2>
                    </div>
                    <div>
                        <h3>{data?.role}</h3>
                        <div className="text-xs text-gray-200">{`${data?.start}-${data?.end}`}</div>
                    </div>
                    <p className="text-sm">{data?.description}</p>
                </>
            )}
        </div>
    );
};

type TimeStepProps = {
    position: number;
    isLast: boolean;
    data: {
        company: string;
        start: string;
        end: string;
        role: string;
        description: string;
    };
};
const TimeStep: FC<TimeStepProps> = ({ position, isLast, data }) => {
    const isEvenPosition = position % 2 === 0;

    return match({ isEvenPosition, isLast })
        .with({ isEvenPosition: true, isLast: false }, () => (
            <div className="flex justify-center max-sm:flex-row-reverse">
                <TimePoint data={data} />
                <TimeDahsedLine start end={isLast} />
                <TimePoint isSpacer />
            </div>
        ))
        .with({ isEvenPosition: true, isLast: true }, () => (
            <div className="flex justify-center max-sm:flex-row-reverse">
                <TimePoint data={data} />
                <TimeDahsedLine start isSpacer />
                <TimePoint isSpacer />
            </div>
        ))
        .with({ isEvenPosition: false, isLast: false }, () => (
            <div className="flex justify-center">
                <TimePoint isSpacer />
                <TimeDahsedLine start />
                <TimePoint data={data} />
            </div>
        ))
        .with({ isEvenPosition: false, isLast: true }, () => (
            <div className="flex justify-center">
                <TimePoint isSpacer />
                <TimeDahsedLine start isSpacer />
                <TimePoint data={data} />
            </div>
        ))
        .otherwise(() => <></>);
};

export const About = () => {
    const TIME_POINTS = [];
    return (
        <Main>
            <div className="flex h-full flex-col items-center">
                <Header />
                <PageTitle title="about" />
                <div className="flex flex-1 items-center justify-center p-8 sm:max-w-[90%]">
                    <div className="flex flex-col gap-8">
                        <p>{`I am a software developer with over 2 years of experience developing software applications. As a developer, in the back end I have experience with the development and integration of API's, technologies related to NodeJS and TypeScript, framework NestJS, MongoDB, SQL and relational databases, git and object-oriented programming. In the front end, I have experience working with HTML, CSS, TypeScript/JavaScript and React. I also have some knowledge of CI/CD using Github actions and Docker.`}</p>
                        <p>{`My carrer path so far: `}</p>
                        <div className="flex flex-col max-sm:items-start">
                            {TIME_POINTS.map((data, index) => {
                                return (
                                    <TimeStep
                                        key={index}
                                        position={index}
                                        isLast={
                                            index + 1 === TIME_POINTS.length
                                        }
                                        data={data}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
};
