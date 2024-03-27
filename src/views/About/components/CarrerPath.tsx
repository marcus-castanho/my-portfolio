import React, { FC } from 'react';
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

export const CarrerPath = () => {
    const TIME_POINTS = [];

    return (
        <div className="flex flex-col max-sm:items-start">
            {TIME_POINTS.map((data, index) => {
                return (
                    <TimeStep
                        key={index}
                        position={index}
                        isLast={index + 1 === TIME_POINTS.length}
                        data={data}
                    />
                );
            })}
        </div>
    );
};
