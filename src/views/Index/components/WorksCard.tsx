import React from 'react';
import { Card } from './Card';

export const WorksCard = () => {
    return (
        <Card type="work">
            <div className="flex h-full items-center justify-start">
                <h2 className="text-2xl text-black">My works</h2>
            </div>
        </Card>
    );
};
