import { BadRequest } from '@/errors';
import { log } from '@/logger';
import { sendMail } from '@/services/mail/server';
import { type NextRequest } from 'next/server';
import { z } from 'zod';

async function validateDTO(request: NextRequest) {
    const body = await request.json().catch(() => ({}));
    const payloadSchema = z.object({
        name: z.string(),
        lastName: z.string(),
        email: z.string(),
        message: z.string(),
    });

    const validation = payloadSchema.safeParse(body);
    const { success } = validation;

    if (!success) {
        log({
            payload: JSON.stringify(validation.error.issues),
            level: 'info',
            message: 'Bad Request',
        });
        throw new BadRequest({});
    }

    return validation.data;
}

export async function postEmailcontroller(request: NextRequest) {
    const payload = await validateDTO(request);
    const { name, lastName, email, message } = payload;

    await sendMail({
        subject: `Message from ${name} ${lastName} (${email})`,
        text: message,
    });

    return new Response(undefined, { status: 201 });
}
