import { Unauthorized } from '@/errors';
import { NextRequest } from 'next/server';

export function authenticate(req: NextRequest) {
    const authorization = req.headers.get('authorization');

    if (!authorization || authorization !== process.env.API_KEY)
        throw new Unauthorized({});
}
