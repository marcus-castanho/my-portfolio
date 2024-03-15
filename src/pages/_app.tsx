import React from 'react';
import '@/styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Marcus</title>
                <meta
                    name="description"
                    content="A full stack software developer portfolio"
                />
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;
