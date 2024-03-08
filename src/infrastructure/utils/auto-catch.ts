import { NextFunction, Request, Response } from 'express';


export const autoCatch = (fn: Function) => ((req: Request, res: Response, next: NextFunction) => {

    Promise.resolve(fn(req, res, next))
        .then(result => result)
        .catch((err) => next(err));

});


