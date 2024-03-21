import { NextRequest } from 'next/server';
import { handleErrorResponse } from './handleErrorResponse';

type SetupGlobalMiddlewaresParams = {
    request: NextRequest;
    middlewares: ((request: NextRequest) => void)[];
};

export async function setupGlobalMiddlewares({
    request,
    middlewares,
}: SetupGlobalMiddlewaresParams) {
    return handleErrorResponse(async () => {
        middlewares.forEach((middleware) => middleware(request));
    });
}
