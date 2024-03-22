import { NextResponse, NextRequest } from 'next/server';
import { handleMiddlewareErrorResponse } from './errors/serverErrorHandlers';
import { shouldRunMiddlewares } from './middlewares/shouldRunMiddlewares';
import { setupGlobalMiddlewares } from './middlewares/api/setupGlobalMiddlewares';
import { authenticate } from './middlewares/api/authenticate';

export const config = {
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

export async function middleware(request: NextRequest) {
    try {
        const { pathname } = request.nextUrl;
        const isApiRoute = pathname.startsWith('/api');
        const isExternalService = pathname.startsWith('/api/external');

        if (!shouldRunMiddlewares(request)) return NextResponse.next();
        if (isApiRoute && !isExternalService)
            return setupGlobalMiddlewares({
                request,
                middlewares: [authenticate],
            });

        return NextResponse.next();
    } catch (error) {
        const response = NextResponse.next();
        return handleMiddlewareErrorResponse(error, request, response);
    }
}
