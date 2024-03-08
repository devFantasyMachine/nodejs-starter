import { ErrorRequestHandler, NextFunction, Request, Response } from "express";


export type CustomErrorContent = {
    message: string,
    context?: { [key: string]: any }
};

export abstract class CustomError extends Error {

    abstract readonly statusCode: number;
    abstract readonly errors: CustomErrorContent[];
    abstract readonly logging: boolean;

    constructor(message: string) {
        super(message);

        // Only because we are extending a built in class
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}



const errorHandler: ErrorRequestHandler = (err: Error,
    req: Request,
    res: Response,
    next: NextFunction) => {

    if (err instanceof CustomError) {
        const { statusCode, errors, logging } = err;
        if (logging) {
            console.error(JSON.stringify({
                code: err.statusCode,
                errors: err.errors,
                stack: err.stack,
            }, null, 2));
        }

        return res.status(statusCode).send({ errors });
    }

    console.error(err);
    res.status(500).send({ errors: [{ message: "Something went wrong" }] });
};


export const error404Handler = (req: Request, res: Response, next: NextFunction) => {

    res.status(404).send({ errors: [{ message: "not found" }] });
};


export default errorHandler;

