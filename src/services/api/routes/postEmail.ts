import { Fetch } from '../..';
import { request } from '../httpClient';

type GetArticlesPayload = {
    name: string;
    lastName: string;
    email: string;
    message: string;
};

export const postEmail: Fetch<null, GetArticlesPayload> = async (
    payload: GetArticlesPayload,
    fetchType,
) => {
    const response = await request({
        path: `/email`,
        options: {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        },
        fetchType,
    });
    const { status } = response;

    if (status !== 201) return { success: false, status, data: null };

    return {
        success: true,
        status,
        data: null,
    };
};
