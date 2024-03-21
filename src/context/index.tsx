'use client';

import React, { ReactNode, ComponentType, PropsWithChildren } from 'react';
import { ToastProvider } from './ToastContext';

type ComposedContextsProps = {
    components: ComponentType<PropsWithChildren<unknown>>[];
    children: ReactNode;
};
function ComposedContexts(props: ComposedContextsProps) {
    const { components, children } = props;

    return (
        <>
            {components.reduceRight((acc, CurrContext) => {
                return <CurrContext>{acc}</CurrContext>;
            }, children)}
        </>
    );
}

type AppContextProviderProps = {
    children: ReactNode;
    providers?: ComposedContextsProps['components'];
};
export function AppContextProvider({
    children,
    providers = [ToastProvider],
}: AppContextProviderProps) {
    return (
        <ComposedContexts components={providers}>{children}</ComposedContexts>
    );
}
