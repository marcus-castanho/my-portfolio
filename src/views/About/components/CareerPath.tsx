import classNames from 'classnames';
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
            {
                <div
                    className={classNames(
                        'flex w-0 flex-1 flex-col border-white',
                        isSpacer ? ['w-3'] : ['w-0 border-[1px] border-dashed'],
                    )}
                />
            }
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
            className={classNames(
                'relative flex flex-col gap-4 p-4 pb-8 landscape:w-1/2 md:landscape:w-[400px]',
                isSpacer ? ['max-sm:hidden'] : [],
            )}
        >
            {!isSpacer && (
                <>
                    <div className="absolute left-0 top-0 translate-y-[-45%] p-4">
                        <h2 className="text-2xl font-bold">{data?.company}</h2>
                    </div>
                    <div>
                        <h3>{data?.role}</h3>
                        <div className="text-xs text-gray-200">{`${data?.start} - ${data?.end}`}</div>
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
                <TimeDahsedLine start />
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

export const CareerPath = () => {
    const TIME_POINTS: {
        company: string;
        start: string;
        end: string;
        role: string;
        description: string;
    }[] = [
        {
            company: 'Awesomic',
            start: 'July 2025',
            end: 'Present',
            role: 'Full stack developer',
            description: `As a software consultant at Awesomic, I worked on multiple clients projects, contributing to full stack development across both web and mobile platforms. My work involved building new products from scratch, collaborating with designers and founders, and delivering functional prototypes and core features within short timelines.`,
        },
        {
            company: 'Mutant',
            start: 'May 2022',
            end: 'July 2025',
            role: 'Full stack developer',
            description: `As a full stack developer working for Mutant's client, Vivo (Telefônica Brasil) - one of the largest telecommunications companies in Brazil, I have contributed to the development of AI-powered solutions mainly focused on back-office applications related to AURA (Vivo's artificial intelligence chatbot) used by other Vivo's teams.`,
        },
        {
            company: 'PRO FRANCHISING',
            start: 'Oct 2021',
            end: 'May 2022',
            role: 'Back end developer',
            description: `Development of applications and REST API's for internal management (ERP) and IT support system of enterprises in the franchise model`,
        },
        {
            company: 'Soditech',
            start: 'May 2021',
            end: 'Oct 2021',
            role: 'Product Analyst',
            description: `Development of Renault products located in the engine bay area of the vehicle designing and following the development of solutions for parts of different teams of the product engineering department from different countries using agile methodologies.`,
        },
        {
            company: 'Renault',
            start: 'Apr 2019',
            end: 'Mar 2021',
            role: 'Engineering Intern',
            description: `Support to the engineering team in the vehicle architecture department. Aid in design solutions involving parts of multiple departments agents of the engine compartment. Follow up on project solutions through agile methodologies. Also monitoring of performance indicators of project problems solutions.`,
        },
    ];

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
