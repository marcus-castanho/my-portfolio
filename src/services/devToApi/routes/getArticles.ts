import { z } from 'zod';
import { Fetch } from '../..';
import { InvalidResponseDataError } from '@/errors';
import { request } from '../httpClient';

export type Article = z.infer<typeof articlesSchema>[number];

const userSchema = z.object({
    name: z.string(),
    username: z.string(),
    twitter_username: z.union([z.string(), z.null()]),
    github_username: z.union([z.string(), z.null()]),
    user_id: z.number(),
    website_url: z.union([z.string(), z.null()]),
    profile_image: z.string(),
    profile_image_90: z.string(),
});

const articlesSchema = z.array(
    z.object({
        type_of: z.string(),
        id: z.number(),
        title: z.string(),
        description: z.string(),
        readable_publish_date: z.string(),
        slug: z.string(),
        path: z.string(),
        url: z.string(),
        comments_count: z.number(),
        public_reactions_count: z.number(),
        collection_id: z.union([z.number(), z.null()]),
        published_timestamp: z.string(),
        positive_reactions_count: z.number(),
        cover_image: z.string(),
        social_image: z.string(),
        canonical_url: z.string(),
        created_at: z.string(),
        edited_at: z.union([z.string(), z.null()]),
        crossposted_at: z.union([z.string(), z.null()]),
        published_at: z.string(),
        last_comment_at: z.string(),
        reading_time_minutes: z.number(),
        tag_list: z.array(z.string()),
        tags: z.string(),
        user: userSchema,
    }),
);

function validateArticlesSchemaSchema(payload: unknown) {
    const validation = articlesSchema.safeParse(payload);
    const { success } = validation;

    if (!success)
        throw new InvalidResponseDataError(
            JSON.stringify(validation.error.issues),
        );

    return validation.data;
}

type GetArticlesPayload = {
    limit: number;
    page: number;
    username?: string;
};

export const getArticles: Fetch<
    { pages: number; items: Article[] },
    GetArticlesPayload
> = async (payload: GetArticlesPayload, fetchType) => {
    const { limit, page, username } = payload;
    const response = await request({
        path: `/articles/?per_page=${limit}&page=${page}&username=${username}`,
        options: { method: 'GET' },
        fetchType,
    });
    const { status } = response;
    const resBody = await response.json().catch(() => ({}));

    if (status !== 200) return { success: false, status, data: null };

    const data = validateArticlesSchemaSchema(resBody);

    return {
        success: true,
        status,
        data: {
            pages: 0,
            items: data,
        },
    };
};
