'use client';

import React, { ReactNode, FC } from 'react';
import { FormField } from '@/components/FormField';
import { match } from 'ts-pattern';

type FormInputProps = {
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xlg';
};
const InputContainer: FC<FormInputProps> = ({ children, size }) => {
    return (
        <div
            className={match(size)
                .with('sm', () => 'h-8')
                .with('md', () => 'h-12')
                .with('lg', () => 'h-16')
                .with('xlg', () => 'h-48')
                .otherwise(() => '')}
        >
            {children}
        </div>
    );
};

export const ContactForm = () => {
    return (
        <form
            className="w-full rounded-[2rem] bg-gray-950 lg:max-w-[600px]"
            onSubmit={(event) => {
                event.preventDefault();
            }}
        >
            <div className="grid grid-cols-2">
                <div className="col-span-2 row-span-1 sm:col-span-1">
                    <FormField.Root inputId="name" label="Name">
                        <InputContainer size="md">
                            <FormField.TextInput
                                inputId="name"
                                onChange={() => {}}
                                placeHolder="Enter your name"
                                required
                            />
                        </InputContainer>
                    </FormField.Root>
                </div>
                <div className="col-span-2 row-span-1 sm:col-span-1">
                    <FormField.Root inputId="name" label="Last Name">
                        <InputContainer size="md">
                            <FormField.TextInput
                                inputId="name"
                                onChange={() => {}}
                                placeHolder="Enter your last name"
                                required
                            />
                        </InputContainer>
                    </FormField.Root>
                </div>
                <div className="col-span-2 row-span-1">
                    <FormField.Root inputId="email" label="Your e-mail">
                        <InputContainer size="md">
                            <FormField.TextInput
                                inputId="email"
                                onChange={() => {}}
                                placeHolder="Enter an e-mail for me to reply you"
                                required
                            />
                        </InputContainer>
                    </FormField.Root>
                </div>
                <div className="col-span-2 row-span-2">
                    <FormField.Root inputId="message" label="Message">
                        <InputContainer size="xlg">
                            <FormField.TextArea
                                inputId="message"
                                onChange={() => {}}
                                placeHolder="Describe your message here"
                                required
                            />
                        </InputContainer>
                    </FormField.Root>
                </div>
            </div>
            <div className="p-8">
                <button
                    type="submit"
                    className="w-full rounded-full bg-blue-800 p-4 text-xl hover:brightness-125"
                >
                    Send
                </button>
            </div>
        </form>
    );
};
