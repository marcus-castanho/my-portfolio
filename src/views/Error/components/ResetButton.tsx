'use client';

import React, { FC } from 'react';

type ResetButtonProps = {
    reset: () => void;
};

export const ResetButton: FC<ResetButtonProps> = ({ reset }) => {
    return <button onClick={() => reset()}>Try again</button>;
};
