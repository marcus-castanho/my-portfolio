import React, { FC } from 'react';
import { match } from 'ts-pattern';
import { CheckIcon } from './icons/CheckIcon';
import { WarningFilledIcon } from './icons/WarningFilledIcon';
import { InfoIcon } from './icons/InfoIcon';
import { ErrorIcon } from './icons/ErrorIcon';

export type ToastType = 'success' | 'warning' | 'info' | 'error';

type ToastProps = {
    display: boolean;
    message: string;
    type: ToastType;
};

export const Toast: FC<ToastProps> = ({ display, message, type }) => {
    const title = match(type)
        .with('success', () => 'Success')
        .with('warning', () => 'Warning')
        .with('info', () => 'Info')
        .with('error', () => 'Error')
        .otherwise(() => 'Info');
    const icon = match(type)
        .with('success', () => <CheckIcon size={24} fillColor="white" />)
        .with('warning', () => (
            <WarningFilledIcon size={24} fillColor="white" />
        ))
        .with('info', () => <InfoIcon size={24} fillColor="white" />)
        .with('error', () => <ErrorIcon size={24} fillColor="white" />)
        .otherwise(() => <></>);

    if (!display) return <></>;
    return (
        <div
            aria-label="toast-message"
            className="fixed right-0 top-0 z-20 max-sm:w-full max-sm:p-1 sm:right-3 sm:top-3"
        >
            <div
                className={match(type)
                    .with(
                        'success',
                        () =>
                            'flex justify-center rounded-2xl bg-green-400 p-4',
                    )
                    .with(
                        'warning',
                        () =>
                            'flex justify-center rounded-2xl bg-yellow-400 p-4',
                    )
                    .with(
                        'info',
                        () => 'flex justify-center rounded-2xl bg-gray-100 p-4',
                    )
                    .with(
                        'error',
                        () => 'flex justify-center rounded-2xl bg-red-500 p-4',
                    )
                    .otherwise(
                        () => 'flex justify-center rounded-2xl bg-white p-4',
                    )}
            >
                <div className={`flex max-w-xs items-center justify-between`}>
                    <div className="w-6">{icon}</div>
                    <div className="pl-4 text-white">
                        <p className="font-bold">{title}</p>
                        <p> {message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
