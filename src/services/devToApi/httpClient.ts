import { FetchType } from '..';
import { PROXY_URL } from './proxy';

export function request({
    path,
    options,
    fetchType = {
        type: 'SSG',
        options: {
            next: { revalidate: 3600 },
        },
    },
}: {
    path: string;
    options?: RequestInit;
    fetchType?: FetchType;
}) {
    const apiUrl = PROXY_URL;

    return fetch(`${apiUrl}${path}`, {
        ...options,
        ...fetchType.options,
    });
}
