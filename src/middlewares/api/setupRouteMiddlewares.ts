import { NextRequest } from 'next/server';
import { handleErrorResponse } from './handleErrorResponse';

type SetupRouteMiddlewaresParams<T> = {
    request: NextRequest;
    middlewares: ((request: NextRequest) => void)[];
    controller: (request: NextRequest) => Promise<T>;
};

export async function setupRouteMiddlewares<T>({
    request,
    middlewares,
    controller,
}: SetupRouteMiddlewaresParams<T>) {
    return handleErrorResponse(async () => {
        middlewares.forEach((middleware) => middleware(request));
        return controller(request);
    });
}
