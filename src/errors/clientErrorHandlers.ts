import { log } from '@/logger';

export function handleClientError(error) {
    const { digest } = error;
    log({
        message: 'Uncaught error',
        payload: {
            ...(digest ? { digest } : {}),
            message: error.message,
            stack: error.stack,
        },
    });
}
