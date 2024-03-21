import { FetchType } from '..';

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
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const headers = options?.headers;

    return fetch(`/api/${path}`, {
        ...options,
        headers: {
            Authorization: `${API_KEY}`,
            ...headers,
        },
        ...fetchType.options,
    });
}
