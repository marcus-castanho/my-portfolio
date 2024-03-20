import React from 'react';
import { EmptyFolderIcon } from './icons/EmptyFolderIcon';

export const NoContentMessage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <EmptyFolderIcon size={148} fillColor="white" />
            <p>Oops...nothing to see here (yet).</p>
        </div>
    );
};
