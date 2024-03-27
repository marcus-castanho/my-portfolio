import React, { FC } from 'react';
import { ArrowLeftIcon } from './ArrowLeftIcon';

type ArrowRightIconProps = {
    size?: number;
    fillColor?: string;
};

export const ArrowRightIcon: FC<ArrowRightIconProps> = ({
    size,
    fillColor = 'black',
}) => {
    return (
        <div className="rotate-180">
            <ArrowLeftIcon size={size} fillColor={fillColor} />
        </div>
    );
};
