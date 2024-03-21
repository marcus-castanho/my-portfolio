import { BadRequest } from '@/errors';
import { log } from '@/logger';
import { sendMail } from '@/services/mail/server';
import { type NextRequest } from 'next/server';
import { z } from 'zod';
import validator from 'validator';
import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';

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

    const emailTemplateSource = fs.readFileSync(
        path.resolve(process.cwd(), 'src/templates/contactEmail.hbs'),
        'utf8',
    );
    const template = handlebars.compile(emailTemplateSource);
    const htmlToSend = template({
        name: validator.escape(name),
        lastName: validator.escape(lastName),
        email: validator.escape(email),
        message: validator.escape(message),
    });

    await sendMail({
        subject: `Message from ${name} ${lastName} (${email})`,
        text: message,
        html: htmlToSend,
    });

    return new Response(undefined, { status: 201 });
}
