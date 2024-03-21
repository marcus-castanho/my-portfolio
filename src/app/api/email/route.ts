import { setupRouteMiddlewares } from '@/middlewares/api/setupRouteMiddlewares';
import { postEmailcontroller } from '@/server/controllers/email';
import { type NextRequest } from 'next/server';

export const POST = async (request: NextRequest) =>
    setupRouteMiddlewares({
        request,
        middlewares: [],
        controller: postEmailcontroller,
    });
