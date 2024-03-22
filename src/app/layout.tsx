import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { AppContextProvider } from '@/context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Marcus',
    description: 'A full stack software developer portfolio',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${inter.className} dark:bg-black dark:text-white`}
            >
                <AppContextProvider>{children}</AppContextProvider>
            </body>
        </html>
    );
}
