export class CustomError extends Error {
    constructor(
        readonly errorName = 'InvalidResponseDataError',
        readonly errorMessage?: string,
    ) {
        super(errorMessage);
        this.name = errorName;
        this.message = errorMessage || '';
    }
}

export class InvalidResponseDataError extends CustomError {
    constructor(
        readonly errorMessage?: string,
        readonly errorName = 'InvalidResponseDataError',
    ) {
        super(errorMessage);
        this.name = errorName;
        this.message = errorMessage || '';
    }
}

export class HTTPException extends CustomError {
    constructor(
        readonly errorMessage: string = '',
        readonly statusCode = 500,
        readonly errorName = 'HTTPException',
        readonly originalError?: Error,
    ) {
        super(errorMessage);
        this.name = errorName;
        this.message = errorMessage || '';
    }
}

export class Unauthorized extends HTTPException {
    readonly sessionEnd?: boolean;
    constructor({
        message = 'Unauthorized',
        sessionEnd = false,
        error,
    }: {
        message?: string;
        sessionEnd?: boolean;
        error?: Error;
    }) {
        super(...[message, 401, 'Unauthorized', error]);
        this.sessionEnd = sessionEnd;
    }
}

export class NotFound extends HTTPException {
    constructor({
        message = 'Not Found',
        error,
    }: {
        message?: string;
        error?: Error;
    }) {
        super(...[message, 404, 'NotFound', error]);
    }
}

export class InternalServerError extends HTTPException {
    constructor({
        message = 'Internal Server Error',
        error,
    }: {
        message?: string;
        error?: Error;
    }) {
        super(...[message, 500, 'InternalServerError', error]);
    }
}

export class BadRequest extends HTTPException {
    constructor({
        message = 'Bad Request',
        error,
    }: {
        message?: string;
        error?: Error;
    }) {
        super(...[message, 400, 'BadRequest', error]);
    }
}
