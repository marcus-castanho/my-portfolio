import { handleApiErrorResponse } from '@/errors/serverErrorHandlers';

export function handleErrorResponse<T>(next: () => T) {
    try {
        return next();
    } catch (error) {
        return handleApiErrorResponse(error);
    }
}
