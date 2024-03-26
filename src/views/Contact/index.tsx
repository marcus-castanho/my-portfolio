import React from 'react';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { PageTitle } from '@/components/PageTitle';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';

export const Contact = () => {
    return (
        <Main>
            <div className="flex h-full flex-col items-center">
                <Header />
                <PageTitle title="contact" />
                <div className="flex flex-1 flex-col items-center justify-center gap-12 p-8 sm:max-w-[90%] sm:gap-24 sm:p-16 lg:flex-row">
                    <div className="flex w-full px-8 lg:w-1/2 lg:justify-end">
                        <ContactInfo />
                    </div>
                    <div className="flex w-full items-center lg:w-1/2 lg:justify-start">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </Main>
    );
};
