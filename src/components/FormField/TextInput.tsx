import React, { FC, InputHTMLAttributes } from 'react';

type TextInputProps = {
    inputId: string;
    defaultValue?: string;
    placeHolder?: string;
    required?: boolean;
    onChange?: (text: string) => void;
    type?: Extract<
        InputHTMLAttributes<HTMLButtonElement>['type'],
        'email' | 'tel' | 'text' | 'url'
    >;
    disabled?: boolean;
};

export const TextInput: FC<TextInputProps> = ({
    inputId,
    defaultValue = '',
    placeHolder = '',
    required = false,
    onChange = () => {},
    type = 'text',
    disabled = false,
}) => {
    return (
        <input
            type={type}
            id={inputId}
            onChange={({ target }) => onChange(target.value)}
            className="h-full w-full rounded-full p-3.5 text-black placeholder-gray-500 focus:outline-0"
            required={required}
            defaultValue={defaultValue}
            placeholder={placeHolder}
            disabled={disabled}
            aria-label="text-input"
        />
    );
};
