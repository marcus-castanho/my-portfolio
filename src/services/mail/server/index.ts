import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const credentials = {
    email: process.env.EMAIL,
    password: process.env.EMAIL_PASSWORD,
};

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: credentials.email,
        pass: credentials.password,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

export const sendMail = (options: Mail.Options) =>
    new Promise<string>((resolve, reject) => {
        transport.sendMail(
            { from: credentials.email, to: credentials.email, ...options },
            function (err) {
                if (!err) return resolve('Email sent');

                reject(err.message);
            },
        );
    });
