import React from 'react';

export const Presentation = () => {
    return (
        <div className="flex flex-col gap-6 p-12">
            <p className="text-lg">Hi!🖐</p>
            <h1 className="text-5xl">{`I'm Marcus`}</h1>
            <p className="text-lg">
                {`I am a software developer from Brazil who likes to build
        scalable back end services and user friendly front
        end applications.`}
            </p>
        </div>
    );
};
