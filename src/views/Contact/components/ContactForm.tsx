'use client';

import React, { useState } from 'react';
import { FormField } from '@/components/FormField';
import { match } from 'ts-pattern';
import { useToast } from '@/context/ToastContext';
import { postEmail } from '@/services/api/routes/postEmail';
import { log } from '@/logger';

type FormState = {
    name: string;
    lastName: string;
    email: string;
    message: string;
};

export const ContactForm = () => {
    const [form, setForm] = useState<FormState>({
        name: '',
        lastName: '',
        email: '',
        message: '',
    });
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = () => {
        setIsSubmitting(true);
        postEmail(form)
            .then(({ success }) => {
                match(success)
                    .with(true, () =>
                        toast('Message sent successfully', 'success'),
                    )
                    .otherwise(() =>
                        toast(
                            'Error sending the message. Please, try again later.',
                            'error',
                        ),
                    );
            })
            .catch((error) => {
                log({ payload: error, message: error.message, level: 'error' });
            })
            .finally(() => setIsSubmitting(false));

        return;
    };

    return (
        <form
            className="w-full rounded-[2rem] bg-gray-950 lg:max-w-[600px]"
            onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
            }}
        >
            <div className="grid grid-cols-2">
                <div className="col-span-2 row-span-1 sm:col-span-1">
                    <FormField.Root inputId="name" label="Name">
                        <div className="h-12">
                            <FormField.TextInput
                                inputId="name"
                                onChange={(value) =>
                                    setForm((state) => ({
                                        ...state,
                                        name: value,
                                    }))
                                }
                                placeHolder="Enter your name"
                                required
                            />
                        </div>
                    </FormField.Root>
                </div>
                <div className="col-span-2 row-span-1 sm:col-span-1">
                    <FormField.Root inputId="last-name" label="Last Name">
                        <div className="h-12">
                            <FormField.TextInput
                                inputId="last-name"
                                onChange={(value) =>
                                    setForm((state) => ({
                                        ...state,
                                        lastName: value,
                                    }))
                                }
                                placeHolder="Enter your last name"
                                required
                            />
                        </div>
                    </FormField.Root>
                </div>
                <div className="col-span-2 row-span-1">
                    <FormField.Root inputId="email" label="Your e-mail">
                        <div className="h-12">
                            <FormField.TextInput
                                inputId="email"
                                onChange={(value) =>
                                    setForm((state) => ({
                                        ...state,
                                        email: value,
                                    }))
                                }
                                placeHolder="Enter an e-mail for me to reply you"
                                required
                            />
                        </div>
                    </FormField.Root>
                </div>
                <div className="col-span-2 row-span-2">
                    <FormField.Root inputId="message" label="Message">
                        <div className="h-48">
                            <FormField.TextArea
                                inputId="message"
                                onChange={(value) =>
                                    setForm((state) => ({
                                        ...state,
                                        message: value,
                                    }))
                                }
                                placeHolder="Describe your message here"
                                required
                            />
                        </div>
                    </FormField.Root>
                </div>
            </div>
            <div className="p-8">
                <button
                    type="submit"
                    className="w-full rounded-full bg-blue-800 p-4 text-xl hover:brightness-125"
                    disabled={isSubmitting}
                >
                    Send
                </button>
            </div>
        </form>
    );
};
