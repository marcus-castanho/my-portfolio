import React, { FC } from 'react';

type TextAreaProps = {
    inputId: string;
    defaultValue?: string;
    placeHolder?: string;
    required?: boolean;
    onChange?: (text: string) => void;
    disabled?: boolean;
};

export const TextArea: FC<TextAreaProps> = ({
    inputId,
    defaultValue = '',
    placeHolder = '',
    required = false,
    onChange = () => {},
    disabled = false,
}) => {
    return (
        <textarea
            id={inputId}
            onChange={({ target }) => onChange(target.value)}
            className="h-full w-full resize-none rounded-[2rem] p-3.5 text-black placeholder-gray-500 focus:outline-0"
            required={required}
            defaultValue={defaultValue}
            placeholder={placeHolder}
            disabled={disabled}
            aria-label="textarea"
        />
    );
};
