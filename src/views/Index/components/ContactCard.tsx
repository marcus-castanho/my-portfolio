import React from 'react';
import { Card } from './Card';

export const ContactCard = () => {
    return (
        <Card type="contact">
            <div className="flex h-full items-center justify-start">
                <h2 className="text-2xl text-black">Contact</h2>
            </div>
        </Card>
    );
};
